module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //MYSQL 에는 users테이블 생성
      //id가 기본적으로 들어있어서 따로 안만들어줘도 됨.
      email: {
        type: DataTypes.STRING(30), //문자열이어야하고 30글자 이내여야한다
        allowNull: false, //필수 true 면 선택적으로
        unique: true, //고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, TINTEGER, FLOAT, DATETIME
        allowNull: false, //필수 true 면 선택적으로
      },
      password: {
        type: DataTypes.STRING(100), //문자열이어야하고 100글자 이내여야한다
        allowNull: false, //필수 true 면 선택적으로
      },
    },
    {
      //user 모델에 대한 세팅
      charset: "utf8",
      collate: "utf8_general_ci", //한글 저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };
  return User;
};
