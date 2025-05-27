import React from "react";
import { BackgroundBeams } from "../components/background-beams";

const page = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About US
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          At <strong>BRAINSHORING - FZCO</strong>, we craft cutting-edge web and
          mobile applications tailored to your business goals. Our team also
          drives digital growth through strategic social media management and
          highly targeted advertising solutions. We turn your vision into
          impactful digital products that stand out in today’s competitive
          market To empower businesses with innovative digital solutions that
          drive growth, streamline operations, and connect with customers more
          effectively
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
