module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //이모티콘 포함
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //post.addUse, post.getUser post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //post.addHashtags
    db.Post.hasMany(db.Comment); //post.addComments post.getComments
    db.Post.hasMany(db.Image); //post.addImages post.getImages
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //post.addLikers, post.removeLikers
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); //좋아요(사용자, 게시글) //post.addRetweet
  };
  return Post;
};
