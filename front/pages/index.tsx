import React from 'react';
import type { NextPage } from "next";
import { Row, Col } from 'antd';

const Home: NextPage = () => {
  return(
  <div>
     <Row gutter={8}>
      {/* xs:mobile, sm: tablet, md: 작은 데스크탑 */}
        <Col xs={24} md={6}>메인페이지1</Col> 
        <Col xs={24} md={12}>메인페이지2</Col> 
        <Col xs={24} md={6}>메인페이지3</Col> 
      </Row>
  </div>
  )
}

export default Home;