'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Watchlist_Stocks',
      [
        {
          watchlistId: 1,
          stockId: 1,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          watchlistId: 1,
          stockId: 4,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          watchlistId: 1,
          stockId: 25,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          watchlistId: 1,
          stockId: 60,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          watchlistId: 1,
          stockId: 52,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          watchlistId: 1,
          stockId: 12,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          watchlistId: 1,
          stockId: 18,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          watchlistId: 1,
          stockId: 21,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Watchlist_Stocks', null, {});
  },
};
