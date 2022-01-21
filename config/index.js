//sequelize ORM configuration
const dbConfig = require("./db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.variety = require("../models/variety.model.js")(sequelize, Sequelize);

db.product.hasMany(db.variety, { as: "variety" });
db.variety.belongsTo(db.product, {
  foreignKey: "productId",
  as: "product",
});

module.exports = db;
