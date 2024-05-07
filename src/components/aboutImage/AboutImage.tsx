import { useState } from "react";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import "./aboutImage.css";

interface Position {
  x: number;
  y: number;
}

export default function AboutImage() {
  const [hover, setHover] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <FadeInWhenVisible>
      <img
        src="avatar.jpeg"
        alt="Profile avatar image"
        className={`rounded-full transition-shadow duration-300 hover:shadow-md ease-out hover:shadow-custom-green ${
          hover ? "noCursor" : ""
        }`}
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
          Gustavo Aramayo
        </div>
      )}
    </FadeInWhenVisible>
  );
}
