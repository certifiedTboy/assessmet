const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const app = express();
// const passport = require("passport");
const db = require("./config/");
const indexRoute = require("./routes/index");
const productRoute = require("./routes/product.route");
const varietyRoute = require("./routes/varietyRoute");

// set port, listen for requests
const PORT = process.env.PORT || 3000;

let corsOptions = {
  origin: "http://localhost:3000",
};

app.set("view engine", "ejs");
app.use(cors(corsOptions));

app.use(indexRoute);
app.use(productRoute);
app.use(varietyRoute);
// require("./config/passport")(passport);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
