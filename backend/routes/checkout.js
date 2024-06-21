const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require("crypto")
const { ordermodel } = require('../models/order.model.js')

const instance = new Razorpay({
    key_id: 'rzp_test_uvbKlfoiK4a0IB',
    key_secret: 'l8rAM0OC9g4hsuDMfehc2RP3',
});

router.post('/createOrder', async (req, res) => {
    let { amount } = req.body;

    console.log('Received amount in rupees:', amount); // Log the received amount in rupees

    if (!amount) {
        return res.status(400).json({ success: false, message: 'Amount is required' });
    }

    // Remove non-numeric characters from the amount
    amount = amount.replace(/[^\d.-]/g, '');

    const amountInPaise = Number(amount) * 100; // Convert to paise
    console.log('Converted amount in paise:', amountInPaise); // Log the converted amount

    if (isNaN(amountInPaise)) {
        return res.status(400).json({ success: false, message: 'Invalid amount' });
    }

    const options = {
        amount: amountInPaise,  // amount in paise
        currency: "INR",
    };

    try {
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create order',
        });
    }
});


router.post("/paymentverification",async(req,res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "l8rAM0OC9g4hsuDMfehc2RP3")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await ordermodel.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/success?reference=${razorpay_payment_id}`

    );
  } else {
    res.status(400).json({
      success: false,
    })
}})


module.exports = router;
