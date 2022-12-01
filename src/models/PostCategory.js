'use strict';

module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('Category',
    {},
    {
      sequelize,
      timestamps: false,
      underscored: true
    });

    postCategory.associate = (models) => {
      postCategory.belongsTo(models.Category,
        {
          through: postCategory,
          foreignKey: 'category_id',
          as: 'categories' 
        });
    };

    postCategory.associate = (models) => {
      postCategory.belongsTo(models.BlogPost,
        { 
          through: postCategory,
          foreignKey: 'post_id',
          as: 'blog_posts'
         });
    };

  return postCategory;
};