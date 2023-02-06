import React from 'react'
import TopHeader from '../src/components/TopHeader'
import NavBar from '../src/components/NavBar'
import MainCarousel from '../src/components/MainCarousel'
import BannerBottom from '../src/components/BannerBottom'
import AboutArea from '../src/components/AboutArea'
import OurNutritionist from '../src/components/OurNutritionist.js'
import Services from '../src/components/Services.js'

const index = () => {
  return ( 
    <div>
      <TopHeader />
      <NavBar />
      <MainCarousel />
      <BannerBottom />
      <AboutArea />
      <OurNutritionist />
      <Services />
    </div> 
  );
}

export default index;