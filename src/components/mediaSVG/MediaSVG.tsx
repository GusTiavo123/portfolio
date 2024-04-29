import React, { useState } from 'react';

interface Link {
  href: string;
  src: string;
  alt: string;
  label: string;
}

const links: Link[] = [
  {
    href: "https://www.linkedin.com/in/gustavo-aramayo-b80b4b166/",
    src: "linkedin.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/GusTiavo123",
    src: "github.svg",
    alt: "Github",
    label: "GitHub",
  },
  {
    href: "/your-cv-link",
    src: "cv.svg",
    alt: "CV",
    label: "Download",
  },
];

const MediaSVG: React.FC = () => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => setTooltip(label);
  const handleMouseLeave = () => setTooltip(null);

  return (
    <div className="flex px-4 bg-custom-box-dark rounded-full border-t-2 border-custom-box-border w-fit">
      {links.map((link, index) => (
        <div key={index} className="inline-flex flex-col items-center m-2">
          <a
            href={link.href}
            onMouseEnter={() => handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
            className="group hover:scale-110 transform transition-transform duration-300 hover:shadow-lg"
            target='_blank'
          >
            <img src={link.src} alt={link.alt} className="h-7 w-7" />
            <span className="absolute bottom-full hidden group-hover:inline-block w-auto text-white text-sm shadow-lg mb-3">
              {link.label}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MediaSVG;
