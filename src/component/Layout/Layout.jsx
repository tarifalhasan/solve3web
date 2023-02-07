import React from "react";
import { Footer, Navbar } from "../index";

const Layout = ({ children }) => {
  return (
    <main className="max-w-[1920px] mx-auto">
      <Navbar />
      <section className="mt-28">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
