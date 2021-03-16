'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscriptions', {
    topic_id: {
      type: DataTypes.UUID,
      required: true,
      allowNull: false
    },
    topic: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      required: true,
      defaultValue: true
    },
    subscribers_url: {
      type: DataTypes.JSON,
      allowNull: false
    },
    
  }, {
    tableName: 'Subscriptions',
    timestamps: false,
    paranoid: true,
    underscored: true
  });
  return Subscription;
};