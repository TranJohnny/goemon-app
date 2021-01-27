'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist_Stocks = sequelize.define(
    'Watchlist_Stock',
    {
      watchlistId: DataTypes.INTEGER,
      stockId: DataTypes.INTEGER,
    },
    {}
  );
  Watchlist_Stocks.associate = function (models) {
    // associations can be defined here
  };
  return Watchlist_Stocks;
};
