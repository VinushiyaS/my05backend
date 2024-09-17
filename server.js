const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const tournamentRoutes = require('./routes/tournament');
const auctionRoutes = require('./routes/auction');
const subscriptionRoutes = require('./routes/subscription');

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/auctions', auctionRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
