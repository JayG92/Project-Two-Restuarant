module.exports = function(sequelize, DataTypes) {
var reservations = sequelize.define("reservations", {
    name: DataTypes.STRING,
    phone: DataTypes.TEXT,
    party: DataTypes.TEXT,
    message: DataTypes.TEXT
  });
  return reservations;
}