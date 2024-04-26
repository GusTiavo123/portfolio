import MediaSVG from "../../components/mediaSVG/MediaSVG";
import { TypewriterEffectSmoothText } from "../../components/textGenerate/TextGenerate";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className="max-w-6xl w-full space-y-36 z-10">
      <Navbar />
      <div className="flex md:flex-row">
        <div className="text-white flex-1">
          <MediaSVG />
          <TypewriterEffectSmoothText />
          <p className="text-lg text-custom-gray">
            Blending art and logic, I craft web solutions that are as beautiful
            as they are functional. Driven by innovation and user experience, I
            turn ideas into impactful digital realities.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <img
            src="computer.gif"
            alt="Computer dance gif"
            className="w-max h-auto"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
