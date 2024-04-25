import "./background.css";
import React from "react";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full background relative flex flex-col z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-dot-white/[0.2]  custom-mask z-[-1]"></div>
      <div className="flex flex-col items-center pt-8 pr-10 pb-10 pl-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
