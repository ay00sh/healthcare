const path = require("path");
const hbs = require("hbs");

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up hbs
hbs.registerPartials(partialsPath);

module.exports = {
  viewsPath,
  setAppViewEngine: function(app) {
    app.set("views", viewsPath);
    app.set("view engine", "hbs");
  }
};
