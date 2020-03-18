const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class shift extends Model {}

shift.init(
  {
    author: DataTypes.STRING,
    body: DataTypes.STRING,
    created_at: DataTypes.DATE
  },
  {
    sequelize
  }
);

module.exports = shift;

