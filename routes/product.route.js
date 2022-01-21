const express = require("express");
const bodyParser = require("body-parser");
const product = require("../controllers/products.controller.js");
const variety = require("../controllers/variety.controller");
const upload = require("../config/multer");

const router = express.Router();

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());

//create product route
router.post("/products", upload.single("pics"), product.create);

// rendera all products to dom
router.get("/products", product.findAll);

//delete all products
router.delete("/products", product.deleteAll);

// delete single product
router.delete("/products/:id", product.delete);

router.update("/products/:id", product.Updateproduct);

module.exports = router;
