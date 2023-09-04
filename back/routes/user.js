const express = require('express');
const bcrpt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next)=> { //미들웨어 확장
    passport.authenticate('local', (err, user, info)=> {
        if(err){
            console.error(err);
           return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async(loginErr)=>{
            if(loginErr){
                console.error(loginErr)
                return next(loginErr)
            }
            return res.json(user)
        })
    })(req, res, next);
});

router.post('/', async (req, res, next)=> { //POST /user/
    try{
        const exUser = await User.findOne({
            where: { //조건
                email: req.body.email,
            }
        });
        if(exUser){
           return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrpt.hash(req.body.password, 12) //보톤 10-13 숫자가 높을수록 암호강도는 세지만, 시간이 오래걸림
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060') //모든서버는 두번째인자가 '*'
        res.status(201).send('ok');
    }catch(error){
        console.error(error);
        next(error) //status(500)
    }
});

module.exports = router;

