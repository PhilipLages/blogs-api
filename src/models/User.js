'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: DataTypes.NUMBER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
  });
  return user;
};

//npx sequelize model:generate --name --attributes --underscored