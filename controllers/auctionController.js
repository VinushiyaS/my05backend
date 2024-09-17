const Auction = require('../models/Auction');

// Create Auction
exports.createAuction = async (req, res) => {
  const { tournament, players } = req.body;

  try {
    const auction = new Auction({
      tournament,
      players,
    });

    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Ongoing Auctions
exports.getOngoingAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({ status: 'open' });
    res.json(auctions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
