
exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    title: "Add Home",
    currentPage: "add-home"
  });
}
