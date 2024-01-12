import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

// Pass the child props
export default function Layout({ children }) {
  return (
    <>
    <Header />
    <Sidebar />

      {children}
      
    <Footer />
    </>
  );
}