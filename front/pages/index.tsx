import React from 'react';
import type { NextPage } from "next";
import { Row, Col } from 'antd';
<<<<<<< HEAD
import LoginMain from '../components/main/loginMain';
import LogoutMain from '../components/main/logoutMain';
=======
>>>>>>> 2ba4eb7efdd106695123f78e6b01fa5b100e69f3

const Home: NextPage = () => {
  const me = false;
  return(
  <div>
<<<<<<< HEAD
     {me ? <LoginMain /> : <LogoutMain />}
=======
     <Row gutter={8}>
      {/* xs:mobile, sm: tablet, md: 작은 데스크탑 */}
        <Col xs={24} md={6}>메인페이지1</Col> 
        <Col xs={24} md={12}>메인페이지2</Col> 
        <Col xs={24} md={6}>메인페이지3</Col> 
      </Row>
>>>>>>> 2ba4eb7efdd106695123f78e6b01fa5b100e69f3
  </div>
  )
}

export default Home;