const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validateSampleInput = require('../../validation/sample');

const Sample = require('../../models/Sample');

router.get("/test", (req, res) => res.json({ msg: "This is the samples route" }));

router.get('/', (req, res) => {
  Sample.find()
    .sort([['name', 'descending']])
    .then(samples => res.json(samples))
    .catch(err => res.status(404).json({ nosamplesfound: 'No samples found' }));
});

router.post('/',
  (req, res) => {
    const { errors, isValid } = validateSampleInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newSample = new Sample({
      name: req.body.name,
      url: req.body.url
    });

    newSample.save().then(sample => res.json(sample));
  }
);

module.exports = router;

// made another comment