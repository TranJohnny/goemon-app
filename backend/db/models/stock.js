'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    'Stock',
    {
      ticker: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {}
  );
  Stock.associate = function (models) {
    const columnMapping1 = {
      through: 'Watchlist_Stock',
      foreignKey: 'stockId',
      otherKey: 'watchlistId',
    };
    const columnMapping2 = {
      through: 'Portfolio',
      foreignKey: 'stockId',
      otherKey: 'userId',
    };
    const columnMapping3 = {
      through: 'Transaction',
      foreignKey: 'stockId',
      otherKey: 'userId',
    };
    Stock.belongsToMany(models.Watchlist, columnMapping1);
    Stock.belongsToMany(models.User, columnMapping2);
    Stock.belongsToMany(models.User, columnMapping3);
  };
  return Stock;
};
