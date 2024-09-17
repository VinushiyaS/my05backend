const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware.isCommittee, tournamentController.createTournament);
router.get('/', tournamentController.getTournaments);

module.exports = router;
