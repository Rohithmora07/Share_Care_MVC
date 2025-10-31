const express = require("express");
const router = express.Router();

// ✅ Route to render login page
router.get("/", (req, res) => {
  res.render("pages/login", { title: "Login" });
});

// ✅ Handle login form submission
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple check (for now)
  if (email === "admin@gmail.com" && password === "12345") {
    res.redirect("/dashboard");
  } else {
    res.render("pages/login", { title: "Login", error: "Invalid credentials!" });
  }
});

module.exports = router;
