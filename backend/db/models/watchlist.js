'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define(
    'Watchlist',
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {}
  );
  Watchlist.associate = function (models) {
    const columnMapping = {
      through: 'Watchlist_Stock',
      foreignKey: 'watchlistId',
      otherKey: 'stockId',
    };

    Watchlist.belongsTo(models.User, { foreignKey: 'userId' });
    Watchlist.belongsToMany(models.Stock, columnMapping);
  };
  return Watchlist;
};
