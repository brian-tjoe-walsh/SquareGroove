const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Grid = require('../../models/Grid');
const validateGridInput = require('../../validation/grid');

router.get('/', (req, res) => {
  Grid.find()
    .sort({ date: -1 })
    .then(grids => res.json(grids))
    .catch(err => res.status(404).json({ nogridsfound: 'No grids found' }));
});

router.get('/user/:user_id', (req, res) => {
  Grid.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .then(grids => res.json(grids))
    .catch(err =>
      res.status(404).json({ nogridsfound: 'No grids found from that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  Grid.findById(req.params.id)
    .then(grid => res.json(grid))
    .catch(err =>
      res.status(404).json({ nogridfound: 'No tweet found with that ID' })
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGridInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newGrid = new Grid({
      user: req.user.id,
      title: req.body.title,
      grid: req.body.grid
    });

    newGrid.save().then(grid => res.json(grid));
  }
);

module.exports = router;

// made another comment