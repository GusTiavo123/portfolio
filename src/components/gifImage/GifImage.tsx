import { useState } from "react";
import ReactPlayer from "react-player";

interface Position {
  x: number;
  y: number;
}

const GifImage = () => {
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
  );
};

export default GifImage;
