// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative text-white">
      
      {/* side label */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* full width content */}
      <div className="max-w-4xl mx-auto">

        <p className="font-semibold mb-5 text-[#16f2b3] text-2xl uppercase">
          Who I am?
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Hi, I’m Ankita Sahay, a Computer Science undergraduate from NIT Jamshedpur. I have a strong interest in software development, especially in building full-stack web applications.
          Along with development, I actively practice Data Structures and Algorithms to strengthen my problem-solving skills.
          I’m passionate about learning new technologies and building impactful applications, and I’m looking forward to starting my career as a Software Development Engineer.
        </p>

      </div>
    </div>
  );
};

export default AboutSection;