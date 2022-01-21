const express = require("express");
const bodyParser = require("body-parser");
const variety = require("../controllers/variety.controller");
const upload = require("../config/multer");

const router = express.Router();

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());

//Post varity of products
router.post("/varieties/:id", upload.array("pics", 3), variety.create);

//display all Associated variety to a product to Dom
router.get("/varieties/:id", variety.findAll);

//display single variety to DOM
router.get("/variety/product/:id", variety.findOne);

//update single variety
router.get("/variety/product/:id", variety.UpdateVariety);

//delete all variety
router.get("/variety/product/", variety.deleteAll);

//delete single variety
router.get("/variety/product/:id", variety.delete);

module.exports = router;
