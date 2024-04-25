import { TypewriterEffectSmooth } from "./typewriter-effect";

export function TypewriterEffectSmoothText() {
  const words = [
    {
      text: "Fullstack",
    },
    {
      text: "Web",
    },
    {
      text: "Developer",
    },
  ];
  return (
      <TypewriterEffectSmooth words={words} />
  );
}
