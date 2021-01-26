'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@user.io',
          username: 'Demo-lition',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          email: faker.internet.email(),
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: faker.internet.email(),
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
      },
      {}
    );
  },
};
