import React, { useRef, useState } from "react";
import FadeInWhenVisible from "../../effects/FadeInWhenVisible";
import { SVGprops } from "../../types/types";
import SVGIcon from "../SVGs/SVGIcon";

type ProjectProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
};



const Project: React.FC<ProjectProps> = ({
  src,
  title,
  description,
  technologies,
  liveUrl,
  repoUrl
}) => {

  const svgs: SVGprops[] = [
    {
      href: liveUrl,
      src: "website.svg",
      alt: "website link",
      label: "Website",
    },
    {
      href: repoUrl,
      src: "code.svg",
      alt: "code link",
      label: "Code",
    },
  ];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <FadeInWhenVisible>
      <div className="flex w-full">
        <div
          className="relative flex flex-1 items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-auto w-full rounded-s-xl border-t-2 border-custom-box-border">
            <video
              ref={videoRef}
              preload="metadata"
              className="h-full w-full rounded-s-xl transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0.7 }}
              loop
              muted
            >
              <source src={src} type="video/mp4" />
              Your browser does not support videos.
            </video>
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-14 w-14 text-white opacity-75"
                >
                  <path fill="currentColor" d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-custom-box-dark rounded-e-xl border-t-2 border-custom-box-border py-3 px-5">
          <h3 className="text-2xl text-white font-semi-bold mb-2">{title}</h3>
          <p className="text-custom-gray text-md mb-2">{description}</p>
          <ul className="list-disc list-inside mb-2 text-white">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="mt-auto">
            <div className="flex justify-end">
              {svgs.map((svg, index) => (
                <div key={index} className="flex items-center m-2">
                  <SVGIcon {...svg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Project;
