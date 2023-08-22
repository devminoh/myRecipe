module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      //MYSQL 에는 posts테이블 생성
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      //user 모델에 대한 세팅
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //다대다 관계
    db.Post.hasMany(db.Image); //게시글1 이미지 여러개
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    db.Post.belongsTo(db.Post, { as: "Retweet" });
  };
  return Post;
};
