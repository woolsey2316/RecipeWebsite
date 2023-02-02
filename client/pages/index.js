import React from 'react'
import TopHeader from '../src/components/TopHeader'
import NavBar from '../src/components/NavBar'
import MainCarousel from '../src/components/MainCarousel'
import BannerBottom from '../src/components/BannerBottom'
import AboutArea from '../src/components/AboutArea'

const index = () => {
  return ( 
    <div>
      <TopHeader />
      <NavBar />
      <MainCarousel />
      <BannerBottom />
      <AboutArea />
    </div> 
  );
}

export default index;