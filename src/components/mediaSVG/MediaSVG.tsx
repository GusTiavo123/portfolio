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
    label: "Download CV",
  },
];

const MediaSVG: React.FC = () => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => setTooltip(label);
  const handleMouseLeave = () => setTooltip(null);

  return (
    <div className="flex gap-4 relative">
      {links.map((link, index) => (
        <div key={index} className="inline-flex flex-col items-center">
          <a
            href={link.href}
            onMouseEnter={() => handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
            className="group hover:scale-110 transform transition-transform duration-300 hover:shadow-lg"
            target='_blank'
          >
            <img src={link.src} alt={link.alt} className="h-9 w-9" />
            <span className="absolute bottom-full hidden group-hover:inline-block w-auto bg-custom-black text-white text-s rounded-md shadow-lg p-1">
              {link.label}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MediaSVG;
