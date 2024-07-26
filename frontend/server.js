// server.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user.js'); // Assuming you have a user model

mongoose.connect("mongodb://localhost:27017/tanmayPortfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.error("Database connection error:", err);
});

const messageschema = new mongoose.Schema({
    username: String,
    password: String,
});

const message = mongoose.model('message', messageschema);
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.post('/signup', async (req, res) => {
    try {
        const userdata = {
            username: req.body.username,
            password: req.body.password
        }
        await message.create(userdata);
        res.sendFile(path.join(__dirname, 'public', 'home.html'));
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('Internal Server Error'); // Send an error status in case of an error
    }
});

app.post('/login', async (req, res) => {
    try {
        // Extract username and password from the request body
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });

        // Check if user exists
        if (user) {
            // Send welcome message if login successful
            res.send(`Welcome back, ${user.username}!`);
               res.sendFile(path.join(__dirname, 'public', 'home.html'));
        } else {
            // Send error message if login fails
            res.send('Invalid username or password.');
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal Server Error'); // Send an error status in case of an error
    }

    // The following line should not be here; it will never be reached
 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
