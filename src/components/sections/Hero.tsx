import MediaSVG from "../SVGs/MediaSVG";
import { TextGenerateEffect } from "../effects/TextGenerateEffect";


function Hero() {
  const words = `Fullstack Web Developer`

  return (
    <div className="max-w-7xl space-y-36 z-10">
      <section className="flex md:flex-row">
        <article className="text-white flex-1">
          <MediaSVG /> 
          <TextGenerateEffect words={words}/>
          <p className="text-xl text-custom-gray mt-10">
            My name is Gustavo, and I blend art and logic to craft web solutions
            that are as beautiful as they are functional. Driven by innovation
            and user experience, I turn ideas into impactful digital realities.
          </p>
        </article>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="computer.gif"
            alt="Computer dance gif"
            className="w-max h-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
