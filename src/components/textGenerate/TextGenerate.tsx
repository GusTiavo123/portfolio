import { TextGenerateEffect } from "./TextGenerateEffect";

export function TypewriterEffectSmoothText() {
  const words = `Fullstack Web Developer`

  return (
      <TextGenerateEffect words={words} />
  );
}
