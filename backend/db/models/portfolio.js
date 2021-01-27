'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    userId: DataTypes.INTEGER,
    stockId: DataTypes.STRING,
    shares: DataTypes.INTEGER
  }, {});
  Portfolio.associate = function(models) {
    // associations can be defined here
  };
  return Portfolio;
};