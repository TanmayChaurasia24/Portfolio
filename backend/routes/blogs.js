// blogRoutes.js
const express = require('express');
const router = express.Router();
const blogsschema = require('../models/blogsschema')

// ROUTE 1 adding blog
router.post('/addblog', async (req, res) => {
    const { title, description } = req.body;
    // Check if required fields are missing
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    try {
        const Blog = await blogsschema.create({
            title: title,
            description: description
        })
       
        res.status(200).json(Blog);
    } catch (error) {
        
        console.error('Error adding blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ROUTE 2 fetch all the blog from the database
router.get("/fetchall", async (req, res) => {
    try {
        let data = await blogsschema.find()
        res.status(200).send(data)
    } catch (err) {
        console.log(err)
        res.status(400).json({ "Error": "Error Fetching Data" })
    }
})


module.exports = router;
