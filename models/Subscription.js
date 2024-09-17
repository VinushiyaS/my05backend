const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  plan: { type: String, enum: ['3 months', '6 months', '1 year'], required: true },
  price: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
