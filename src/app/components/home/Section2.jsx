import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import SplitType from "split-type";

const Section2 = ({ isActive }) => {
  const leftRef = useRef();
  const rightRef = useRef();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [gsapLoaded, setGsapLoaded] = useState(false);
  useEffect(() => {
    if (inView) {
      import("gsap").then(({ gsap }) => {
        const { chars: titleChars } = new SplitType(".home .section-2 h1", {
          types: "chars",
        });
        const { chars: textChars } = new SplitType(".home .section-2 p", {
          types: "chars",
        });
        setGsapLoaded(true);
        gsap.fromTo(
          titleChars,
          {
            y: 50,
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
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.01,
            duration: 0.5,
            ease: "power4.out",
          }
        );
      });
    }
    else{
      setGsapLoaded(false)
    }
  }, [inView]);

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
        <h1 style={{ opacity: gsapLoaded ? 1 : 0 }} ref={ref} className="test">
          Crafting FullStack Magic
        </h1>
        <p style={{ opacity: gsapLoaded ? 1 : 0 }}>
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
