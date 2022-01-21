const db = require("../config");
const Products = db.product;
const bodyParser = require("body-parser");
const Op = db.Sequelize.Op;

//create product
exports.create = (req, res) => {
  x = "uploads/" + req.file.originalname;
  const product = {
    product_name: req.body.name,
    product_description: req.body.description,
    product_image: x,
  };
  Products.create(product)
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

// find all products
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Products.findAll({ where: condition })
    .then((data) => {
      res.render("products", { data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};

//delte single products category
exports.delete = (req, res) => {
  const id = req.params.id;
  Products.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product Deleted Successfuly!",
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

// delete all products
exports.deleteAll = (req, res) => {
  Products.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    });
};

// update sigle product
exports.Updateproduct = (req, res) => {
  const productId = req.params.id;
  x = "uploads/" + req.file.originalname;
  const product = {
    product_name: req.body.name,
    product_description: req.body.description,
    product_image: x,
  };
  Products.update(product, {
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
