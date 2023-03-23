import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import "../assets/css/main.css";
import "normalize.css";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
