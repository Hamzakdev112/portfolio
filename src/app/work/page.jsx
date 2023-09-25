import React from "react";
import Section1 from "../components/work/Section1";
import Section2 from "../components/work/Section2";
import Section3 from "../components/work/Section3";
import Section4 from "../components/work/Section4";
import Section5 from "../components/work/Section5";
import Section6 from "../components/work/Section6";
import Section7 from "../components/work/Section7";

export const metadata = {
  title: "Work - Hamza Dev",
  description:
    "As part of my role within the companies (Social Hippos and Immersive Tech Labs), I had the privilege of working on these projects.",
};

const page = () => {
  return (
    <div className="work">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default page;
