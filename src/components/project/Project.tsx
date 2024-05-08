import React, { useRef, useState } from "react";
import { SVGprops } from "../../types/types";
import SVGIcon from "../SVGs/SVGIcon";

type ProjectProps = {
  src: string;
  title: string;
  description: string;
  technologies: string;
  liveUrl: string;
  repoUrl: string;
  poster: string;
};

const Project: React.FC<ProjectProps> = ({
  src,
  title,
  description,
  technologies,
  liveUrl,
  repoUrl,
  poster
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = window.innerWidth > 1024 ? false : true;

  const svgs: SVGprops[] = [
    {
      href: liveUrl,
      src: "svg/website.svg",
      alt: "website link",
      label: "Website",
      className: "h-7 w-7"
    },
    {
      href: repoUrl,
      src: "svg/code.svg",
      alt: "code link",
      label: "Code",
      className: "h-7 w-7"
    },
  ];


  const handleMouseEnter = () => {
    console.log(isMobile)
    if (!isMobile) {
      setIsHovered(true);
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      videoRef.current?.pause();
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
      if (!isHovered) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    }
  };

  return (
    <article className="flex w-full flex-col">
      <div
        className="relative flex items-center justify-center rounded-t-xl bg-custom-box-dark pt-3 px-3 border-t-2 border-custom-box-border"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="h-auto w-full">
          <video
            ref={videoRef}
            preload="metadata"
            className="w-full rounded-xl transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0.7 }}
            loop
            muted
            poster={poster}
            controls={false}
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
      <div className="flex flex-col bg-custom-box-dark rounded-b-xl min-h-48 px-6 py-3">
        <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
        <p className="text-custom-gray text-md mb-8">{description}</p>
        <div className="flex justify-between mt-auto">
          <p className="text-white italic">{technologies}</p>
          <div className="flex space-x-4">
            {svgs.map((svg, index) => (
              <div key={index} className="flex flex-row items-center">
                <SVGIcon {...svg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
