module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
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
  Comment.associate = (db) => {};
  return Comment;
};
