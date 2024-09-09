import { SVGprops } from "../../types/types";
import SVGIcon from "./SVGIcon";

const svgs: SVGprops[] = [
  {
    href: "https://www.linkedin.com/in/gustavo-aramayo-b80b4b166/",
    src: "svg/linkedin.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
    className: "h-7 w-7"
  },
  {
    href: "https://github.com/GusTiavo123",
    src: "svg/github.svg",
    alt: "Github",
    label: "GitHub",
    className: "h-7 w-7"
  },
  {
    href: "https://drive.google.com/file/d/1saz318Re6TPWsUnoa7sGEDSw_tstQBmZ/view?usp=sharing",
    src: "svg/cv.svg",
    alt: "CV",
    label: "Download",
    className: "h-7 w-7"
  },
];

const MediaSVG: React.FC = () => {
  return (
    <div className="flex px-4 bg-custom-box-dark rounded-full border-t-2 border-custom-box-border w-fit mb-1">
      {svgs.map((svg, index) => (
        <div key={index} className="inline-flex flex-col items-center m-2">
          <SVGIcon {...svg} />
        </div>
      ))}
    </div>
  );
};

export default MediaSVG;
