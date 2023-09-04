const express = require("express");
const cors = require('cors');

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require('./models');
const passportConfig = require('./passport');

const app = express();
db.sequelize.sync()
  .then(()=>{
    console.log('db 연결성공');
  })
  .catch(console.error);

passportConfig();

app.use(cors({
  origin: true,
  credentials: false,
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=> {
  res.send('hello express')
})

app.get("/posts", (req, res) => {
  res.json([
    //데이터는 보통 json
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter); // prefix
app.use("/user", userRouter);
//app.get => 가져오다
//app.post => 생성
//app.put => 전체 수정 (잘 안씀)
//app.delete => 제거
//app.patch => 부분 수정
//app.options => 찔러보기(나...요청 보낼 수 있어?)
//app.head => 헤더만 가져오기(헤더/바디)

app.listen(3065, () => {
  console.log('서버 실행 중');
});