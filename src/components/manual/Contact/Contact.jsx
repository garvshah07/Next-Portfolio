import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="py-20 flex justify-center items-center flex-col">
        <h4 className="text-5xl text-center font-semibold text-white ">
          Let's connect to innovate
        </h4>
        <form
          className="md:min-w-[400px] md:min-h-[400px] bg-gray-400/10 rounded-md text-white bg-clip-padding backdrop-filter p-4 backdrop-blur-sm border-[0.5] border-gray-600 my-20"
          action="https://formspree.io/f/mbjnwbge"
          method="POST"
        >
          <div className="flex justify-center items-start flex-col gap-1">
            <label
              htmlFor="fullName"
              className="text-gray-400 text-sm md:text-base "
            >
              FULLNAME
            </label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              required
              className="outline-none bg-white text-black p-2 border-none rounded-md mb-4 md:min-w-[400px] min-h-[40px]"
            />
          </div>
          <div className="flex justify-center items-start flex-col gap-1">
            <label
              htmlFor="email"
              className="text-gray-400 text-sm md:text-base "
            >
              EMAIL
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              required
              className="outline-none bg-white text-black p-2 border-none rounded-md mb-4 md:min-w-[400px] min-h-[40px]"
            ></input>
          </div>
          <div className="flex justify-center items-start flex-col gap-1">
            <label
              htmlFor="message"
              className="text-gray-400 text-sm md:text-base "
            >
              MESSAGE
            </label>
            <textarea
              name="Message"
              id="message"
              type="email"
              required
              className="resize-none outline-none bg-white text-black p-2 border-none rounded-md mb-4 min-w-full md:min-w-[400px]"
            ></textarea>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-4 py-2 hover:bg-green-700 bg-green-800 rounded-md cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
