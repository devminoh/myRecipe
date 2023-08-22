import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state:any)=> state.user);
  // console.log(me)
  return (<div>
    <div>post갯수 : {me.Posts.length}</div>
    <div>email : {me.email}</div>
    <div>nickname : {me.nickname}</div>
  </div>);
};

export default UserProfile;
