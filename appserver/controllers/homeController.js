// controllers/homeController.js
exports.getHome = (req, res) => {
  res.render("index", {
    title: "ShareCare - Bridging Hearts",
    user: null,
  });
};
