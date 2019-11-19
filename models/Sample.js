const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Sample = mongoose.model('samples', SampleSchema);

module.exports = Sample;
