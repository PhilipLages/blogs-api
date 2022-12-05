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
          foreignKey: 'categoryId',
          otherKey: 'postId',
          onDelete: 'CASCADE'
        });

         models.BlogPost.belongsToMany(models.Category,
          {
            as: 'categories',
            through: postCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
          });
    };

  return postCategory;
};