import React, { useCallback } from 'react';
import Head from "next/head";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import * as style from '../../styles/user/loginFormStyle';
import useInput from '../../shared/useInput';
import Link from "next/link";
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../reducers/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email,password);
    dispatch(loginAction({ email, password }));
    // dispatch(loginRequestAction({ email, password }));
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
          <style.LoginBtn htmlType="submit">
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