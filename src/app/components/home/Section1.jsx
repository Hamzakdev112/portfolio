import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
const Section1 = ({ isActive }) => {
  const leftRef = useRef();
  const rightRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      setGsapLoaded(true);
      const { chars: titleChars } = new SplitType(titleRef.current, {
        types: "chars",
      });
      const { chars: textChars } = new SplitType(textRef.current, {
        types: "chars",
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
  const leafRef = useRef();
  useEffect(() => {
    if (isActive) {
      gsap.to(leftRef.current, { x: 0 }).duration(1);
      gsap.to(rightRef.current, { x: 0 }).duration(1);
    } else {
      gsap.to(leftRef.current, { x: -200 }).duration(1);
      gsap.to(rightRef.current, { x: 200 }).duration(1);
    }
  }, [isActive]);

  return (
    <div className="section-1">
      <div ref={leftRef} className="left">
        <div className="wrapper">
          <div className="title-wrapper">
            <h1 style={{ opacity: gsapLoaded ? 1 : 0 }} ref={titleRef}>
              <span>HAMZA</span> <span>DEV</span>
            </h1>
            <img ref={leafRef} src="/images/home/leaf.png" alt="" />
          </div>
          <p style={{ opacity: gsapLoaded ? 1 : 0 }} ref={textRef}>
            I am an aspiring developer who is in love with the process of
            turning creative ideas into tangilble solutions.
          </p>
        </div>
      </div>
      <div ref={rightRef} className="right">
        <img src="/images/home/1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Section1;
