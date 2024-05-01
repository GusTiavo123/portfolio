import MediaSVG from "../../components/mediaSVG/MediaSVG";
import { TextGenerateEffect } from "../../effects/TextGenerateEffect";
import Navbar from "../navbar/Navbar";

function Header() {
  const words = `Fullstack Web Developer`

  return (
    <header className="max-w-7xl space-y-36 z-10">
      <Navbar />
      <div className="flex md:flex-row">
        <div className="text-white flex-1">
          <MediaSVG /> 
          <TextGenerateEffect words={words}/>
          <p className="text-xl text-custom-gray mt-10">
            My name is Gustavo, and I blend art and logic to craft web solutions
            that are as beautiful as they are functional. Driven by innovation
            and user experience, I turn ideas into impactful digital realities.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
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
