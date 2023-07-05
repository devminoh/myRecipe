import React from 'react';
import { Image } from 'antd';
import * as style from '../styles/cardStyle';
import { useRouter } from 'next/router';
import { PostType } from '../shared/type';

const Card = ({post}: any) => {
  const router = useRouter();
  const handleCardClick = () => {
    router.push({
      pathname: `/about`,
      query: { pid: post.id }
    })
  }
  // console.log(post)
  return(
  <style.CardContainer onClick={handleCardClick}>
    <div><Image
    width={150}
    height={150}
    src={post.image}
  /></div>
  <div className='title'>{post.User.nickname}</div>
  </style.CardContainer>
  )
}

export default Card;