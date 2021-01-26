'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Watchlists',
      [{ id: 1, userId: 1, name: 'My Watchlist' }],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Watchlists', null, {});
  },
};
