const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateGridInput = require('../../validation/grid');

const Sample = require('../../models/Sample');

router.get('/', (req, res) => {
  Sample.find()
    .then(samples => res.json(samples))
    .catch(err => res.status(404).json({ nosamplesfound: 'No samples found' }));
});

router.post('/',
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