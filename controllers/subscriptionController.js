const Subscription = require('../models/Subscription');
const User = require('../models/User');

// Get Subscriptions
exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Subscribe
exports.subscribe = async (req, res) => {
  const { plan } = req.body;

  // Validating subscription plans
  const validPlans = ['3 months', '6 months', '1 year'];
  if (!validPlans.includes(plan)) {
    return res.status(400).json({ msg: 'Invalid plan' });
  }

  try {
    const expiryDate = new Date();
    // Set expiry date based on the plan
    switch (plan) {
      case '3 months':
        expiryDate.setMonth(expiryDate.getMonth() + 3);
        break;
      case '6 months':
        expiryDate.setMonth(expiryDate.getMonth() + 6);
        break;
      case '1 year':
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        break;
    }

    // Update user's subscription information
    await User.findByIdAndUpdate(req.user.id, {
      subscriptionPlan: plan,
      subscriptionExpiry: expiryDate,
    });

    res.json({ msg: 'Subscription successful', expiryDate });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
