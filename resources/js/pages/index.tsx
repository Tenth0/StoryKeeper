import React from 'react'
import NavigationBar from '@/components/navigation_bar';
import HomeBody from '@/components/Home/home_body';
import HomeFooter from '@/components/Home/home_footer';

const index = () => {
  return (
    <>
      <NavigationBar />
      <HomeBody />
      <HomeFooter />
    </>
  );
}

export default index