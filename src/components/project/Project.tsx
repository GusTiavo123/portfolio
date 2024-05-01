import React, { useRef, useState } from 'react';
import FadeInWhenVisible from "../../effects/FadeInWhenVisible";

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
        <div className="flex flex-1 items-center justify-center relative"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
          <video
            ref={videoRef}
            preload="metadata"
            className="h-auto rounded-s-xl border-t-2 border-custom-box-border transition-opacity duration-300"
            loop
            muted
            style={{ opacity: isHovered ? 1 : 0.7 }}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support videos.
          </video>
          {!isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl text-white opacity-75">&#9658;</span> 
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col pl-6 bg-custom-box-dark rounded-e-xl border-t-2 border-custom-box-border px-7 py-5">
          <h3 className="text-xl text-white mb-2">{title}</h3>
          <p className="text-white mb-2">{description}</p>
          <ul className="list-disc list-inside mb-2 text-white">
            {technologies.map(tech => <li key={tech}>{tech}</li>)}
          </ul>
          <div className="flex flex-col md:flex-row justify-start md:justify-between mt-2">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">Live Site</a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">GitHub Repo</a>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Project;
