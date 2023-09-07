import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
const Section1 = ({ isActive }) => {
  const [gsapLoaded, setGsapLoaded] = useState(false);
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      setGsapLoaded(true);
      const { chars: titleChars } = new SplitType(".home .section-1 h1", {
        types: "words, chars",
      });
      const { chars: textChars } = new SplitType(".home .section-1 p", {
        types: "words, chars",
      });
      gsap.fromTo(
        titleChars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        textChars,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    });
  }, []);
  useEffect(() => {
    if (isActive) {
      gsap.to(".home .section-1 .left", { x: 0 }).duration(1);
      gsap.to(".home .section-1 .right", { x: 0 }).duration(1);
    } else {
      gsap.to(".home .section-1 .left", { x: -200 }).duration(1);
      gsap.to(".home .section-1 .right", { x: 200 }).duration(1);
    }
  }, [isActive]);

  return (
    <div className="section-1">
      <div className="left">
        <div className="wrapper">
          <div className="title-wrapper">
            <h1 style={{ opacity: gsapLoaded ? 1 : 0 }}>
              <span>HAMZA</span> <span>DEV</span>
            </h1>
            <img src="/images/home/leaf.png" alt="" />
          </div>
          <p style={{ opacity: gsapLoaded ? 1 : 0 }}>
            I am an aspiring developer who is in love with the process of
            turning creative ideas into tangilble solutions.
          </p>
        </div>
      </div>
      <div className="right">
        <img src="/images/home/1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Section1;
