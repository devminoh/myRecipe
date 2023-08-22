import React, { useCallback } from 'react';
import Head from "next/head";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import * as style from '../../styles/user/loginFormStyle';
import useInput from '../../shared/useInput';
import Link from "next/link";
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequestAction } from '../../reducers/user';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { logInLoading, logInDone }= useSelector((state:any)=> state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email,password);
    dispatch(loginRequestAction({ email, password }));
    if(logInDone) {
      router.push('/')
    }
  },[email, password]);

  return (
    <div>
      <Head>
        <title>로그인 | 나만의 레시피</title>
      </Head>
      <style.FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <Input
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <style.ButtomWrapper>
          <style.LoginBtn htmlType="submit"
          loading={logInLoading}>
            로그인
          </style.LoginBtn>
          <Link href="/signup">
            <a>
              <style.SignUpBtn>회원가입</style.SignUpBtn>
            </a>
          </Link>
        </style.ButtomWrapper>
      </style.FormWrapper>
    </div>
  );
};

export default LoginForm;