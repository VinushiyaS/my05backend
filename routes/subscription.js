const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.isAdmin, subscriptionController.getSubscriptions);
router.post('/subscribe', authMiddleware.isCommittee, subscriptionController.subscribe);

module.exports = router;
