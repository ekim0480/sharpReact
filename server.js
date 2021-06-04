// Dependencies
const express = require("express");
const cors = require("cors");
const path = __dirname + "/views/";

// Initialize express app.
const app = express();
var PORT = process.env.PORT || 3000;

// Requiring in our models
const db = require("./models");

var corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));
app.use(express.static(path));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.sendFile(path + "index.html");
// });

// routes
require("./routes/customer.routes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
