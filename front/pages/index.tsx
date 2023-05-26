import React from 'react';
import type { NextPage } from "next";
import { Row, Col } from 'antd';
import LoginMain from '../components/main/loginMain';
import LogoutMain from '../components/main/logoutMain';

const Home: NextPage = () => {
  const me = false;
  return(
  <div>
     {me ? <LoginMain /> : <LogoutMain />}
  </div>
  )
}

export default Home;