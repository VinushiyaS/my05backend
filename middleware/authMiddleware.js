const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (role) => async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    if (role && req.user.role !== role) {
      return res.status(403).json({ msg: 'Access denied' });
    }

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = {
  isAdmin: authMiddleware('admin'),
  isCommittee: authMiddleware('committee-leader'),
};
