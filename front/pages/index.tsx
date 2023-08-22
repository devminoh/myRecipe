import React from 'react';
import type { NextPage } from "next";
import { Row, Col } from 'antd';
import LoginMain from '../components/main/loginMain';
import LogoutMain from '../components/main/logoutMain';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state:any)=> state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state:any)=> state.post);
  const id = useSelector((state:any)=> state.post.mainPosts);
  
  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    })
  }, []);

  useEffect(() => {
    function onScroll() {
      // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight); // 얼마나 내렸는지, 화면 보이는길이, 총 길이
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);
  
  return(
  <div>
     {me ? <LoginMain /> : <LogoutMain />}
  </div>
  )
}

export default Home;