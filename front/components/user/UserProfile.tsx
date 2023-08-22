import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state:any)=> state.user);

  return <div>Hello, profile!</div>;
};

export default UserProfile;
