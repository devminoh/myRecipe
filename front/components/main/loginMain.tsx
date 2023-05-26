import React from 'react';
import { Row, Col } from 'antd';

const LoginMain = () => {
  return(
    <div>
      <Row gutter={8}>
      {/* xs:mobile, sm: tablet, md: 작은 데스크탑 */}
        <Col xs={24} md={12}>메인페이지1</Col> 
        <Col xs={24} md={12}>메인페이지2</Col> 
      </Row>
      <div>메인페이지3</div>
    </div>
      )
}

export default LoginMain;