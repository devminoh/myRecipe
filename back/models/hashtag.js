module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      //MYSQL 에는 users테이블 새엇ㅇ
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      //user 모델에 대한 세팅
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //이모티콘 저장
    }
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" }); //다대다 관계
  };
  return Hashtag;
};
