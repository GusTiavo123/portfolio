import { useState } from "react";
import MediaSVG from "../SVGs/MediaSVG";
import { TextGenerateEffect } from "../effects/TextGenerateEffect";
import ReactPlayer from "react-player";

interface Position {
  x: number;
  y: number;
}

function Hero() {
  const words = `Fullstack Web Developer`;
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState<boolean>(false);
  const [dialog, setDialog] = useState<String>("Play :D");
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const togglePlayPause = () => {
    setPlaying(!playing);
    setDialog(playing ? "Play :D" : "Pause :(");
  };

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
          <div onClick={togglePlayPause}>
            <img
              src="computer.gif"
              alt="Computer dance gif"
              className={`w-max h-auto ${hover ? "noCursor" : ""}`}
              onMouseEnter={() => setHover(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHover(false)}
            />
            {hover && (
              <div
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
                className={"hoverText"}
              >
                {dialog}
              </div>
            )}
            <ReactPlayer
              url="music/song.mp3"
              playing={playing}
              loop={true}
              width="0"
              height="0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
