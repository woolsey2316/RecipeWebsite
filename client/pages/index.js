import React from 'react'
import TopHeader from '../src/components/TopHeader'
import NavBar from '../src/components/NavBar'
import MainCarousel from '../src/components/MainCarousel'
import BannerBottom from '../src/components/BannerBottom'
import AboutArea from '../src/components/AboutArea'
import OurNutritionist from '../src/components/OurNutritionist'
import Services from '../src/components/Services'
import HowItWorks from '../src/components/HowItWorks'
import WhyChoose from '../src/components/WhyChoose'
import PricingPlan from '../src/components/PricingPlan'
import LatestFromBlog from '../src/components/LatestFromBlog'
import FooterArea from '../src/components/FooterArea'

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
      <HowItWorks />
      <WhyChoose />
      <PricingPlan />
      <LatestFromBlog />
      <FooterArea />
    </div> 
  );
}

export default index;