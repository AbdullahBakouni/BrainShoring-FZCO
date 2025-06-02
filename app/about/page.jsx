import React from "react";
import { BackgroundBeams } from "../components/background-beams";

const page = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About US
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          At <strong>BRAINSHORING - FZCO</strong>, we build innovative digital
          solutions tailored to your business goals — from cutting-edge{" "}
          <strong>web and mobile applications</strong> to advanced{" "}
          <strong>AI modeling</strong> and strategic{" "}
          <strong>social media management</strong>. <br />
          <br />
          We also specialize in{" "}
          <strong>Robotic Process Automation (RPA)</strong>, helping companies
          automate repetitive tasks such as invoicing, file handling, and
          workflow execution. By streamlining operations with tools like{" "}
          <strong>UiPath</strong> and <strong>Automation Anywhere</strong>, we
          enhance accuracy, reduce manual work, and unlock greater scalability.{" "}
          <br />
          <br />
          Our mission is to empower businesses through technologies that drive
          growth, boost efficiency, and strengthen customer engagement.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
