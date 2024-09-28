const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
const componentRoutes = require('./routes/componentRoutes');
const boilerplateRoutes = require('./routes/boilerplateRoutes');
require('dotenv').config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Routes
// app.use('/', (req, res) => res.send('Backend is working'))
// app.use('/api/auth', authRoutes);
app.use('/api/components', componentRoutes);
app.use('/api/boilerplates', boilerplateRoutes);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
