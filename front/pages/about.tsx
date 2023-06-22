import React from 'react';
import AboutLayout from '../components/aboutLayout';
import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();
  const { pid } = router.query;

  return(
    <>
      <AboutLayout pid={pid} />
    </>
  )
}

export default About;