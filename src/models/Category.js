'use strict';

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define({
    name: DataTypes.STRING
  }, {
    sequelize,
  });
  return category;
};