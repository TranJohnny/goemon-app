'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    ticker: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Stock.associate = function(models) {
    // associations can be defined here
  };
  return Stock;
};