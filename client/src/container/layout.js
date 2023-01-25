import React from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export default props => {
  return (
    <div id="wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
