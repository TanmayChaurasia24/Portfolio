const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
const app = express();
const port = 8000;
const blog = require('./routes/blogs'); // Make sure the path is correct
const submit = require('./routes/contact'); // Make sure the path is correct
const authRoutes = require('./routes/auth');

connectToMongo();

app.use(cors());
app.use(express.json());


app.use('/blogs', blog); // Mount the blog route
app.use('/contact', submit); // Mount the contact route2
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
