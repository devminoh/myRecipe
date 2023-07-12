import React from 'react';
import type { NextPage } from "next";
import { Row, Col } from 'antd';
import LoginMain from '../components/main/loginMain';
import LogoutMain from '../components/main/logoutMain';
import { useSelector } from 'react-redux';

const Home: NextPage = () => {
  const { me } = useSelector((state:any)=> state.user);
  const { mainPosts } = useSelector((state:any)=> state.post);
  const id = useSelector((state:any)=> state.post.mainPosts);
  
  return(
  <div>
     {me ? <LoginMain /> : <LogoutMain />}
  </div>
  )
}

export default Home;