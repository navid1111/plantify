// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username:       { type: String, required: true, unique: true },
  email:          { type: String, required: true, unique: true },
  password:       { type: String, required: true },
  streak:         { type: Number, default: 0 },
  ranking:        { type: Number, default: 0 },
  carbonFootprint:{ type: Number, default: 0 },
  plants:         [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }],
  createdAt:      { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
