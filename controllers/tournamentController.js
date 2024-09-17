const Tournament = require('../models/Tournament');

// Create Tournament
exports.createTournament = async (req, res) => {
  const { name, date } = req.body;

  try {
    const tournament = new Tournament({
      name,
      date,
      createdBy: req.user.id,
    });

    await tournament.save();
    res.status(201).json(tournament);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Tournaments
exports.getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.json(tournaments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
