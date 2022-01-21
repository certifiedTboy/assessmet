module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("product", {
    product_name: {
      type: DataTypes.STRING,
    },
    product_description: {
      type: DataTypes.TEXT,
    },
    product_image: {
      type: DataTypes.STRING,
    },
  });

  return Products;
};
