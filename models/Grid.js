const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GridSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  grid: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = Grid = mongoose.model('grids', GridSchema);