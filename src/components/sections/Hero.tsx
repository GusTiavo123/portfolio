import MediaSVG from "../SVGs/MediaSVG";
import { TextGenerateEffect } from "../effects/TextGenerateEffect";
import GifImage from "../gifImage/GifImage";

function Hero() {
  const words = `Fullstack Web Developer`;

  return (
    <div className="md:max-w-7xl max-w-3xl space-y-36 z-10">
      <section className="flex md:flex-row">
        <article className="text-white flex-1">
          <MediaSVG />
          <TextGenerateEffect words={words} />
          <p className="text-xl text-custom-gray md:mt-10 mt-5">
            My name is Gustavo, and I blend art and logic to craft web solutions
            that are as beautiful as they are functional. Driven by innovation
            and user experience, I turn ideas into impactful digital realities.
          </p>
        </article>
        <div className="flex-1 items-center justify-center hidden md:flex">
          <GifImage />
        </div>
      </section>
    </div>
  );
}

export default Hero;
