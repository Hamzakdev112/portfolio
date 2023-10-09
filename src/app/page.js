"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./components/home/Section1";
import { useEffect, useState } from "react";
import Section2 from "./components/home/Section2";
import Section3 from "./components/home/Section3";
import Section4 from "./components/home/Section4";
import Section5 from "./components/home/Section5";

const Page = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    document.querySelector('.bg-video').playbackRate = 0.7
    window.scrollTo({
      top:0
    })
    console.clear()
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="home">
         <video className="bg-video" autoPlay muted loop src='/hero.mp4'>
        <source  src='/hero.mp4' type='video/mp4'  />
      </video>
      {screenWidth > 1000 ? (
        <>
          <ReactFullpage
            beforeLeave={(_, { index }) => setActiveSection(index)}
            scrollingSpeed={1000}
            scrollBar
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <Section1
                      moveSectionDown={fullpageApi?.moveSectionDown}
                      isActive={activeSection === 0}
                    />
                  </div>
                  <div className="section">
                    <Section2
                      moveSectionDown={fullpageApi?.moveSectionDown}
                      isActive={activeSection === 1}
                    />
                  </div>
                  <div className="section">
                    <Section3
                      moveSectionDown={fullpageApi?.moveSectionDown}
                      isActive={activeSection === 2}
                    />
                  </div>
                  <div className="section">
                    <Section4
                      moveSectionDown={fullpageApi?.moveSectionDown}
                      isActive={activeSection === 3}
                    />
                  </div>
                  <div className="section">
                    <Section5
                      moveSectionDown={fullpageApi?.moveSectionDown}
                      isActive={activeSection === 4}
                    />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </>
      ) : (
        <div>
          <Section1 isActive={true} />
          <Section2 isActive={true} />
          <Section3 isActive={true} />
          <Section4 isActive={true} />
          <Section5 isActive={true} />
        </div>
      )}
    </div>
  );
};

export default Page;
