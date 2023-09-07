import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import SplitType from "split-type";

const Section4 = ({ isActive }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [gsapLoaded, setGsapLoaded] = useState(false);
  useEffect(() => {
    if (inView) {
      import("gsap").then(({ gsap }) => {
        const { chars: titleChars } = new SplitType(".home .section-4 h1", {
          types: "words, chars",
        });
        const { chars: textChars } = new SplitType(".home .section-4 p", {
          types: "words, chars",
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
    } else {
      setGsapLoaded(false);
    }
  }, [inView]);

  useLayoutEffect(() => {
    if (isActive) {
      gsap.to(".home .section-4 .left", { x: 0 }).duration(1);
      gsap.to(".home .section-4 .right", { x: 0 }).duration(1);
    } else {
      gsap.to(".home .section-4 .left", { x: -300 }).duration(1);
      gsap.to(".home .section-4 .right", { x: 300 }).duration(1);
    }
  }, [isActive]);
  return (
    <div className="section-4">
      <div className="left">
        <img src="/images/home/4.png" alt="" />
      </div>
      <div className="right">
        <h1 style={{ opacity: gsapLoaded ? 1 : 0 }} ref={ref} className="test">
          Math Enthusiast
        </h1>
        <p style={{ opacity: gsapLoaded ? 1 : 0 }}>
          I began my math journey with no formal background, driven purely by
          passion. Despite the challenges, my enthusiasm propelled me forward.
          Today, I revel in the world of mathematics, solving complex problems
          and exploring its beauty. Join me in my mathematical adventure through
          my portfolio!
        </p>
      </div>
    </div>
  );
};

export default Section4;
