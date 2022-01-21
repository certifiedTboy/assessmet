const db = require("../config");
const Variety = db.variety;
const bodyParser = require("body-parser");
const Op = db.Sequelize.Op;

//create variety controller
exports.create = (req, res) => {
  let x = req.files.map((file) => "uploads/" + file.originalname);
  const variety = {
    maker: req.body.maker,
    color: req.body.color,
    model: req.body.model,
    quantity: req.body.quantity,
    productId: req.params.id,
    condition: req.body.condition,
    ram: req.body.ram,
    location: req.body.location,
    type: req.body.type,
    address: req.body.address,
    price: req.body.price,
    brand: req.body.price,
    image: x,
  };
  Variety.create(variety)
    .then((varieties) => {
      console.log(variety);
      res.redirect("back");
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};

// find all assocaited variety to a product
exports.findAll = (req, res) => {
  const id = req.params.id;
  Variety.findAll({
    where: {
      productId: id,
    },
  })
    .then((data) => {
      if (data) {
        res.render("allproducts", { data });
      } else {
        res.status(404).send({
          message: `Cannot find Variety with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// find a single variety
exports.findOne = (req, res) => {
  const newId = req.params.id;
  Variety.findAll({
    where: {
      id: newId,
    },
  })
    .then((data) => {
      if (data) {
        console.log(data);
        res.render("singleVariety", { data });
      } else {
        res.status(404).send({
          message: `Cannot find Variety with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Variety with id=" + id,
      });
    });
};

//update single variety
exports.UpdateVariety = (req, res) => {
  const varietytId = req.params.id;
  let x = req.files.map((file) => "uploads/" + file.originalname);
  const variety = {
    maker: req.body.maker,
    color: req.body.color,
    model: req.body.model,
    quantity: req.body.quantity,
    productId: req.params.id,
    condition: req.body.condition,
    ram: req.body.ram,
    location: req.body.location,
    type: req.body.type,
    address: req.body.address,
    price: req.body.price,
    brand: req.body.price,
    image: x,
  };
  Variety.update(variety, {
    where: { id: id },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Products.",
      });
    });
};

//delete single variety
exports.delete = (req, res) => {
  const id = req.params.id;

  Variety.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Variety Deleted Successfuly!",
        });
      } else {
        res.send({
          message: `Some went wrong`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "some went wrong,",
      });
    });
};

//delete all variety
exports.deleteAll = (req, res) => {
  Variety.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: "Deleted successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred ",
      });
    });
};
