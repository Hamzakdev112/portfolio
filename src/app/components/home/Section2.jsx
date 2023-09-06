import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Section2 = ({ isActive }) => {
  const leftRef = useRef();
  const rightRef = useRef();
  useLayoutEffect(() => {
    if (isActive) {
      gsap.to(leftRef.current, { x: 0 }).duration(1);
      gsap.to(rightRef.current, { x: 0 }).duration(1);
    } else {
      gsap.to(leftRef.current, { x: -300 }).duration(1);
      gsap.to(rightRef.current, { x: 300 }).duration(1);
    }
  }, [isActive]);
  return (
    <div className="section-2">
      <div ref={leftRef} className="left">
        <img src="/images/home/2.png" alt="" />
      </div>
      <div ref={rightRef} className="right">
        <h1>Crafting FullStack Magic</h1>
        <p>
          When it comes to creating powerful websites, serverless makes sense
          and so does next js. I am all about blending aesthetics with
          functionality, ensuring users get a top-notch experience every time
          they interact with my creations.
        </p>
      </div>
    </div>
  );
};

export default Section2;
