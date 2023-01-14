import React, { useRef } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({ children }) => {
  const elementTest = useRef(null);
  const scrollToElement = () => elementTest.current.scrollIntoView();

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" hideSignin />
      <main
        className="site-content"
        elementTest={elementTest}
        scrollToElement={scrollToElement}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutDefault;
