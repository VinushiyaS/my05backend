// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   role: { type: String, enum: ['admin', 'committee-leader', 'user'], default: 'user' },
//   paymentStatus: { type: Boolean, default: false } // Only for Committee Leaders
// });


// module.exports = mongoose.model('User', UserSchema);


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date }
});

module.exports = mongoose.model('User', UserSchema);

