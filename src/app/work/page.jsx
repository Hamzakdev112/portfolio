import React from "react";
import Section1 from "../components/work/Section1";
import Section2 from "../components/work/Section2";
import Section3 from "../components/work/Section3";
import Section4 from "../components/work/Section4";
import Section5 from "../components/work/Section5";

export const metadata = {
  title: "Work - Hamza Dev",
  description:
    "I am a full stack developer proficient in JavaScript and C++, I love building full stack applications using hot technologies such as Next JS, MERN Stack, Nuxt, Nest.",
};

const page = () => {
  return (
    <div className="work">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default page;
