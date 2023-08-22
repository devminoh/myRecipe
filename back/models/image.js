module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      //MYSQL 에는 users테이블 새엇ㅇ
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      //user 모델에 대한 세팅
      charset: "utf8",
      collate: "utf8_general_ci", //이모티콘 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post); //게시글1 이미지 여러개
  };
  return Image;
};
