import React, { useCallback } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import * as style from '../../styles/user/loginForm';
import useInput from '../../shared/useInput';
import Link from "next/link";

const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email,password);
    // dispatch(loginRequestAction({ email, password }));
  },[email, password]);

  return (
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
  );
};

export default LoginForm;