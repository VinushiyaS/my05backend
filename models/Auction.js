const mongoose = require('mongoose');

const AuctionSchema = new mongoose.Schema({
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', required: true },
  players: [{ type: String }],
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
});

module.exports = mongoose.model('Auction', AuctionSchema);
