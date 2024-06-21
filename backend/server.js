const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
const app = express();
const port = 8000;
const blog = require('./routes/blogs');
const submit = require('./routes/contact');
const checkOut = require('./routes/checkout.js')
const authRoutes = require('./routes/auth');

connectToMongo();

app.use(cors());
  
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/blogs', blog);
app.use('/contact', submit);
app.use('/auth', authRoutes);
app.use('/payment',checkOut);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
