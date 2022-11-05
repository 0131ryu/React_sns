module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Image",
    {
      src: {
        type: DataTypes.STIRNG(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //이모티콘 포함
    }
  );
  Image.associate = (db) => {};
  return Image;
};
