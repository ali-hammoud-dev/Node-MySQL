exports.get404 = (req, res, next) => {
  console.log("here");
  res
    .status(404)
    .render("404", { pageTitle: "Page Not Found", subject: "Page Not Found!" });
};