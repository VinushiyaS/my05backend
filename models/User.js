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
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Default role is 'user'
});

const User = mongoose.model('User', userSchema);
module.exports = User;
