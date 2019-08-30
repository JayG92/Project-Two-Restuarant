module.exports = function(sequelize, DataTypes) {
  var menu = sequelize.define("menu", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.TEXT,
    tag: DataTypes.TEXT
  });
  return menu;
};
