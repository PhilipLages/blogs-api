'use strict';

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: DataTypes.NUMBER,
    name: DataTypes.STRING
  }, {
    sequelize,
  });
  return category;
};