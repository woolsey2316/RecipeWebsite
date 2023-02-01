import React from 'react'
import TopHeader from '../src/components/TopHeader'
import NavBar from '../src/components/NavBar'
import MainCarousel from '../src/components/MainCarousel'
import BannerBottom from '../src/components/BannerBottom'

const index = () => {
  return ( 
    <div>
      <TopHeader />
      <NavBar />
      <MainCarousel />
      <BannerBottom />
    </div> 
  );
}

export default index;