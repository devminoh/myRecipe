import React from 'react';
import type { NextPage } from "next";
import { Row, Col } from 'antd';
import LoginMain from '../components/main/loginMain';
import LogoutMain from '../components/main/logoutMain';
import { useSelector } from 'react-redux';

const Home: NextPage = () => {
  const { isLoggedIn } = useSelector((state:any)=> state.user);
  return(
  <div>
     {isLoggedIn ? <LoginMain /> : <LogoutMain />}
  </div>
  )
}

export default Home;