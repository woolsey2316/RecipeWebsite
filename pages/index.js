import React from "react";

import Overview from "@/components/Overview";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Tiles from "@/components/Tiles";
import style from "@/styles/sass/Home.module.scss";

const Home = () => {
  return (
    <div id="wrapper" className={style.wrapper}>
      <Banner />
      <Tiles />
      <Overview />
      <Footer />
    </div>
  );
};

export default Home;
