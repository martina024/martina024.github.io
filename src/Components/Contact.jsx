import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-gradient-to-b from-purple-300 to-bg-transparent p-4 text-sky-900"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-20 md:mt-[0rem] sm:mt-[30rem]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/64d0b5ef-5af0-4aac-aea7-7da440dca34f"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-sky-900 focus:outline-none border-cyan-900"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-sky-900 focus:outline-none border-cyan-900"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-sky-900 focus:outline-none border-cyan-900"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-teal-700 to-blue-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;