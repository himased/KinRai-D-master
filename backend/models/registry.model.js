const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrySchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Registry = mongoose.model('Registry', registrySchema);

module.exports = Registry;