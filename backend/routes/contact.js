const express = require('express');
const router = express.Router();
const contactSchema = require('../models/contactschema');

router.post('/submit', async (req, res) => {
    try {
        // Create a new instance of the Contact model using the request body
        let newContact = new contactSchema(req.body);

        // Save the new contact to the database
        await newContact.save();

        // Respond with a success message
        res.send("Data has been submitted");
    } catch (err) {
        // If an error occurs, respond with a 400 status and the error message
        res.status(400).send(err);
    }
});

module.exports = router; // Corrected module.exports statement
