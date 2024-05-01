import React, { useState } from 'react';
import { SVGprops } from '../../types/types';

const SVGIcon: React.FC<SVGprops> = ({ href, src, alt, label }) => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleMouseEnter = () => setTooltip(label);
  const handleMouseLeave = () => setTooltip(null);

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group hover:scale-110 transform transition-transform duration-300 hover:shadow-lg"
      target='_blank'
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt} className="h-7 w-7" />
      <span className="absolute bottom-full hidden group-hover:inline-block w-auto text-white text-sm shadow-lg mb-3">
        {tooltip}
      </span>
    </a>
  );
};

export default SVGIcon;
