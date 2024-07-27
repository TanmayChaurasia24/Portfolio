const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_token = "tanmayJWTtoken2026";

// route 1 creatting a user 
router.post('/createuser', [
    body('name').isLength({ min: 2 }), // name length should be minimum of 2 characters
    body('email').isEmail(), // validating the email field using a custom method in our User model
    body('password').isLength({ min: 5 }), // validating that passwod length should be of minimum 5 characters
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry an user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(15);
        const secpass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const jwt_data = jwt.sign(data, JWT_token)
        res.json({ jwt_data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// route 2  for login the user
router.post('/login', [
    body("email").isEmail(),
    body('password').exists(),
  ], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    const { email, password } = req.body;
  
    try {
      if (email === process.env.EMAIL && password === process.env.PASS) {
        const data = {
          user: {
            id: 1
          }
        }
        const admintoken = jwt.sign(data, process.env.SECRATE);
        return res.json({ admintoken });
      }
  
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid Credentials!" });
      } else {
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
          return res.status(400).json({ error: 'Invalid Password' });
        }
  
        const data = {
          user: {
            id: user.id,
          },
        };
  
        const jwt_data = jwt.sign(data, JWT_token);
        return res.json({ jwt_data });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
module.exports = router;
