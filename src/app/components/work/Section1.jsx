'use client'
import React, { useEffect, useState } from "react";
import SplitType from "split-type";

const Section1 = () => {
  const [gsapLoaded, setGsapLoaded] = useState(false);
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      setGsapLoaded(true);
      const { chars: titleChars } = new SplitType(".work .section-1 h1", {
        types: "words, chars",
      });
      const { chars: textChars } = new SplitType(".work .section-1 p", {
        types: "words, chars",
      });
      gsap.fromTo(".home .section-1 .left", { x: -200 }, { x: 0 }).duration(1);
      gsap.fromTo(".home .section-1 .right", { x: 200 }, { x: 0 }).duration(1);
      gsap.fromTo(
        titleChars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.10,
          duration: 2,
          delay: 0.2,
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
          delay: 0.2,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    });
  }, []);
  return (
    <div style={{ opacity: gsapLoaded ? 1 : 0 }} className="section-1">
      <h1>WORK</h1>
      <p>
        As part of my role within the companies (Social Hippos and Immersive
        Tech Labs), I had the privilege of working on these project.{" "}
      </p>
    </div>
  );
};

export default Section1;
