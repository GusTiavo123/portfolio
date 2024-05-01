import { SVGprops } from '../../types/types';
import SVGIcon from './SVGIcon';


const svgs: SVGprops[] = [
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
  return (
    <div className="flex px-4 bg-custom-box-dark rounded-full border-t-2 border-custom-box-border w-fit">
      {svgs.map((svg, index) => (
        <div key={index} className="inline-flex flex-col items-center m-2">
          <SVGIcon {...svg} />
        </div>
      ))}
    </div>
  );
}

export default MediaSVG;
