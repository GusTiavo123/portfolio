function MediaSVG() {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.linkedin.com/in/gustavo-aramayo-b80b4b166/"
        className="inline-flex items-center hover:scale-110 transform transition-transform duration-300 hover:shadow-lg"
      >
        <img src="linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
      </a>
      <a
        href="https://github.com/"
        className="inline-flex items-center hover:scale-110 transform transition-transform duration-300 hover:shadow-lg"
      >
        <img src="github.svg" alt="Github" className="h-8 w-8" />
      </a>
      <a
        href="/your-cv-link"
        className="inline-flex items-center hover:scale-110 transform transition-transform duration-300 hover:shadow-lg"
      >
        <img src="cv.svg" alt="CV" className="h-8 w-8" />
      </a>
    </div>
  );
}

export default MediaSVG;
