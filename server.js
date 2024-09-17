const express = require('express');
const cors = require('cors'); // Import the cors package
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
app.use(cors()); // Apply the CORS middleware

// OR configure CORS options if needed
// app.use(cors({
//   origin: 'http://localhost:3000' // Allow only specific origin
// }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/auctions', auctionRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
