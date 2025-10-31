// routes/donorRoutes.js
const express = require("express");
const router = express.Router();

router.get('/donor', (req, res) => {
  const donationOptions = [
    { icon: "🍽️", title: "Food & Nutrition", desc: "Provide daily meals, groceries, and clean drinking water.", type: "food" },
    { icon: "🏥", title: "Healthcare Support", desc: "Contribute to medicines, medical camps, and hospital needs.", type: "healthcare" },
    { icon: "📚", title: "Education Aid", desc: "Sponsor books, school fees, and digital learning resources.", type: "education" },
    { icon: "🏠", title: "Shelter & Clothing", desc: "Help with clothes, blankets, and safe accommodation.", type: "shelter" },
    { icon: "🎁", title: "Emergency Relief", desc: "Provide help during crises and disasters.", type: "emergency" }
  ];
  res.render('donor', { donationOptions });
});

module.exports = router;
