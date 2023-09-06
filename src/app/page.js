"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./components/home/Section1";
import { useEffect, useState } from "react";
import Section2 from "./components/home/Section2";

const Page = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [screenWidth, setScreenWidth] = useState(1001);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="home">
      {screenWidth > 1000 ? (
        <ReactFullpage
          beforeLeave={(_, { index }) => setActiveSection(index)}
          scrollingSpeed={1000}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Section1 isActive={activeSection === 0} />
                </div>
                <div className="section">
                  <Section2 isActive={activeSection === 1} />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      ) : (
        <div>
          <Section1 isActive={true} />
          <Section2 isActive={true} />
        </div>
      )}
    </div>
  );
};

export default Page;
