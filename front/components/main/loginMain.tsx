import React from 'react';
import { Row, Col } from 'antd';
import Card from '../card';
import { PostType } from '../../shared/type';
import { useSelector } from 'react-redux';
import * as style from '../../styles/cardStyle';

{/* xs:mobile, sm: tablet, md: 작은 데스크탑 */}
const LoginMain = () => {
  const { mainPosts } = useSelector((state:any)=> state.post)
  console.log(mainPosts)
  return(
    <div>
      {/* <Row gutter={8}>
        <Col xs={24} md={12}>메인페이지1</Col> 
        <Col xs={24} md={12}>메인페이지2</Col> 
      </Row> */}
      <style.CardWrapper>
        {mainPosts.map((post: PostType)=> <Card key={post.id} post={post} />)}
      </style.CardWrapper>
    </div>
      )
}

export default LoginMain;