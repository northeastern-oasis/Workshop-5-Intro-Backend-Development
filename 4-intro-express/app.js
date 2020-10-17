// This is mostly boilerplate--good to reference later, but we won't be working in here

const express = require('express');
const cors = require('cors');

// If you add more route files, you can import them just like this one
const profileRoutes = require('./routes/profile-routes');

const app = express();

app.use(cors());
app.use(express.json());


// APP ROUTES--make sure to add a new line for each route file you import
app.use('/profile', profileRoutes);

app.listen(3000);