'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Portfolios',
      [
        {
          userId: 1,
          stockId: 45,
          shares: 19,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 62,
          shares: 17,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 7,
          shares: 8,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 44,
          shares: 15,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 9,
          shares: 3,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 45,
          shares: 12,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 8,
          shares: 12,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 16,
          shares: 8,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 5,
          shares: 7,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
        {
          userId: 1,
          stockId: 67,
          shares: 10,
          createdAt: '2021-01-26T23:12:06.052Z',
          updatedAt: '2021-01-26T23:12:06.052Z',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Portfolios', null, {});
  },
};
