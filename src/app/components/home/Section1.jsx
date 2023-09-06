import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Section1 = ({ isActive }) => {
  const leftRef = useRef();
  const rightRef = useRef();
  const leafRef = useRef();
  useLayoutEffect(() => {
    gsap.fromTo(leafRef.current, {y:500}, {y:0})
    if (isActive) {
      gsap.to(leftRef.current, { x: 0 }).duration(1);
      gsap.to(rightRef.current, { x: 0 }).duration(1);
    } else {
      gsap.to(leftRef.current, { x: -300 }).duration(1);
      gsap.to(rightRef.current, { x: 300 }).duration(1);
    }
  }, [isActive]);
  return (
    <div className="section-1">
      <div ref={leftRef} className="left">
        <div className="wrapper">
          <div className="title-wrapper">
            <h1>HAMZA DEV</h1>
            <img ref={leafRef} src="/images/home/leaf.png" alt="" />
          </div>
          <p>
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
