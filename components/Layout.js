import Nav from "./Nav";
import Footer from "./Footer";
import { gsap } from "gsap";
import { createContext } from "react";
export const GsapContext = createContext();
//import { SmoothScrollProvider } from "../context/LocoScroll.context";

function Layout({ children }) {

  const tl = gsap.timeline();
  return (
    // <SmoothScrollProvider
    //   options={{
    //     smooth: true,
    //     smoothMobile: false,
    //     resetNativeScroll: true,
    //     lerp: 0.1,
    //   }}>
      <GsapContext.Provider value={{ tl, gsap }}>
        <div
          //data-scroll-container
          id='wrapper'
          className='flex flex-col min-h-screen font-nunito smooth-scroll'>
          <Nav />
          {children}
          <Footer />
        </div>
      </GsapContext.Provider>
    // </SmoothScrollProvider>
  );
  
}

export default Layout;
