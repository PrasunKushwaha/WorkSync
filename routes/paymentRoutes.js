const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_UVwxEu8DrexcG2", // Replace with your Razorpay test key ID
  key_secret: "j4sw7anCJrNYCyJhmvrsDKOf", // Replace with your Razorpay test key secret
});

// Route to create Razorpay order
router.post("/orders", async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });
    console.log("Order created:", order);
    res.status(200).json({ order });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// Route to fetch payment details
router.get("/payment/:paymentId", async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await razorpay.payments.fetch(paymentId);
    res.status(200).json(payment);
  } catch (error) {
    console.error("Error fetching Razorpay payment:", error);
    res.status(500).json({ error: "Failed to fetch payment details" });
  }
});

module.exports = router;
