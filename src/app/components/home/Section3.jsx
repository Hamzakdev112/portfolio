import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
const Section3 = ({ isActive }) => {
  const leftRef = useRef();
  const rightRef = useRef();
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
    <div className="section-3">
      <div ref={leftRef} className="left">
        <h1>Completely Self Taught</h1>
        <p>
          I started my journey as a self-taught programmer, armed with nothing
          but a non-CS background and a burning passion for coding. The path
          ahead seemed daunting, but I was undeterred. With sheer determination
          and a hunger for knowledge, I charted my course into the industry.
        </p>
      </div>
      <div ref={rightRef} className="right">
        <img src="/images/home/3.png" alt="" />
      </div>
    </div>
  );
};

export default Section3;
