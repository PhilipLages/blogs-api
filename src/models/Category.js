'use strict';

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    timestamps: false
  });

  category.associate = (models) => {
    category.hasMany(models.PostCategory, 
      { 
        foreignKey: 'category_id', 
        as: 'posts_categories' 
      });
  };

  return category;
};