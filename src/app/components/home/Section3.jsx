import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
const Section3 = ({ isActive }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [gsapLoaded, setGsapLoaded] = useState(false);
  useEffect(() => {
    if (inView) {
      import("gsap").then(({ gsap }) => {
        const { chars: titleChars } = new SplitType(".home .section-3 h1", {
          types: "words, chars",
        });
        const { chars: textChars } = new SplitType(".home .section-3 p", {
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

  useEffect(() => {
    if (isActive) {
      gsap.to(".home .section-3 .left", { x: 0 }).duration(1);
      gsap.to(".home .section-3 .right", { x: 0 }).duration(1);
    } else {
      gsap.to(".home .section-3 .left", { x: -200 }).duration(1);
      gsap.to(".home .section-3 .right", { x: 200 }).duration(1);
    }
  }, [isActive]);

  return (
    <div className="section-3">
      <div className="left">
        <h1 style={{ opacity: gsapLoaded ? 1 : 0 }} ref={ref}>
          Completely Self Taught
        </h1>
        <p style={{ opacity: gsapLoaded ? 1 : 0 }}>
          I started my journey as a self-taught programmer, armed with nothing
          but a non-CS background and a burning passion for coding. The path
          ahead seemed daunting, but I was undeterred. With sheer determination
          and a hunger for knowledge, I charted my course into the industry.
        </p>
      </div>
      <div className="right">
        <img src="/images/home/3.png" alt="" />
      </div>
    </div>
  );
};

export default Section3;
