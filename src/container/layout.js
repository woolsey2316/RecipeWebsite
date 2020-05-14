import React from "react";
import Header from "../component/header";
import Footer from "../component/Footer";

export default props => {
  return (
    <div id="wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
