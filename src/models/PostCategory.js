'use strict';

module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    },
    {
      sequelize,
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true
    });

    postCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost,
        { 
          as: 'blog_posts',
          through: postCategory,
          foreignKey: 'category_id',
          otherKey: 'post_id',
         });

         models.BlogPost.belongsToMany(models.Category,
          {
            as: 'categories',
            through: postCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
          });
    };

  return postCategory;
};