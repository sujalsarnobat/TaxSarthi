const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./Config/connect');
const cors = require('cors');
const User = require('./Models/Person');
const userRoutes = require('./routes/UserRoutes');
const OldReignRoutes = require('./routes/OldReignRoutes')
const TaxRoutes = require('./routes/TaxRoutes')
const PersonalInfoRoutes = require('./routes/PersonalInfoRoute')
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the backend server for the TaxSaarthi");
});

// Import and use the user routes
app.use('/user', userRoutes);

app.use('/api/v1/tax',TaxRoutes);

app.use('/policy',OldReignRoutes);

app.use('/user',PersonalInfoRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});

