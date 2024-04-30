import FadeInWhenVisible from "../../effects/FadeInWhenVisible";

type ProjectProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
};


const Project: React.FC<ProjectProps> = ({
  src,
  title,
  description,
  technologies,
  liveUrl,
  repoUrl
}) => {
  return (
    <FadeInWhenVisible>
      <div className="flex w-full bg-custom-box-dark rounded-xl border-t-2 border-custom-box-border px-7 py-5">
        <div className="flex flex-1 items-center justify-center">
          <video
            preload="metadata"
            className="min-h-[300px] h-auto rounded-xl"
            loop
            muted
            autoPlay
          >
            <source src={src} type="video/mp4" />
            Your browser do not support videos
          </video>
        </div>
        <div className="flex flex-1 flex-col pl-6">
          <h3 className="text-xl text-white mb-2">{title}</h3>
          <p className="text-white mb-2">{description}</p>
          <ul className="list-disc list-inside mb-2 text-white">
            {technologies.map(tech => <li key={tech}>{tech}</li>)}
          </ul>
          <div className="flex flex-col md:flex-row justify-start md:justify-between mt-2">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">Live Site</a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">GitHub Repo</a>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Project;
