import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div id="page">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
