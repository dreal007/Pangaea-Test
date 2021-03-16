'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topic_id: {
        type: Sequelize.UUID,
        required: true,
        allowNull: false
      },
      topic: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      subscribers_url: {
        type: Sequelize.JSON,
        required: true,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        required: true,
        defaultValue: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Subscriptions');
  }
};