"use client";

import { Transition } from "./ui/Transitions";


const Contact = () => {
  return (
    <div className="relative" id="contact" style={{ marginLeft: "10%", marginRight: "10%" }}>
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px] -z-10" />
      <footer className="flex items-center justify-around md:px-8 px-2 py-4 text-sm mt-12">
        <Transition>
          <p className="text-[20px]">
            developed by @ Dinyil Drala&copy; {new Date().getFullYear()}
          </p>
        </Transition>
        <Transition>
          <p className="text-[20px]">
            horsedark374@gmail.com
          </p>
        </Transition>
      </footer>
    </div>
  );
};

export default Contact;
