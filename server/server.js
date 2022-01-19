require('dotenv').config();
const cors = require('cors');
const express = require('express');
const moviesRouter = require('./routes/movieRouter');
const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/',moviesRouter)
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on port ${PORT}`)
})
