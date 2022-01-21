module.exports = (sequelize, DataTypes) => {
  const Variety = sequelize.define("variety", {
    maker: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    condition: {
      type: DataTypes.STRING,
    },
    ram: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    brand: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.JSON,
    },
  });

  return Variety;
};
