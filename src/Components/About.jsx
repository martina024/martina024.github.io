import React from "react";

const About = () => {
  return (
    <div
      name="about me"
      className="w-full h-screen bg-purple-300 bg-gradient-to-b from-blue-500 text-sky-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold  border-b-4 border-gray-500 p-2 inline" >
            About Me
          </p>
        </div>

        <p className="lg:text-xl mt-10">
        Well-qualified Full Stack Developer familiar with a wide range
        of programming utilities and languages. Knowledgeable of
        backend and frontend development requirements. Handles any
        part of the process with ease. Collaborative team player with
        excellent technical abilities.

        </p>

        <br />

        <p className="lg:text-xl">
        Offering 8 months of experience in
        the management field and 6 months of related experience.
        Looking forward to making a significant contribution to an
        organization through dedicated effort.
        </p>
      </div>
    </div>
  );
};
export default About