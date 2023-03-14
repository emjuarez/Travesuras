import * as React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
