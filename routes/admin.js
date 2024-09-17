const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/dashboard', authMiddleware.isAdmin, adminController.getAdminDashboard);

module.exports = router;
