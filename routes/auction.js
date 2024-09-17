const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware.isCommittee, auctionController.createAuction);
router.get('/ongoing', auctionController.getOngoingAuctions);

module.exports = router;
