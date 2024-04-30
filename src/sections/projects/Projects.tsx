import Project from "../../components/project/Project";

export default function Projects() {
  return (
    <section className="max-w-7xl z-10 py-48">
      <h2 className="text-white text-3xl font-bold mb-8">
        PROJECTS
      </h2>
      <div className="space-y-14">
        <Project
          src="project2.mp4"
          alt="video project 2"
          title="Project Title 2"
          description="This is a brief description of Project 2."
          technologies={['React', 'TailwindCSS', 'Firebase']}
          liveUrl="http://liveurl.com/project2"
          repoUrl="http://github.com/project2"
        />
        <Project
          src="project3.mp4"
          alt="video project 3"
          title="Project Title 3"
          description="This is a brief description of Project 3."
          technologies={['Vue', 'Vuetify', 'Netlify']}
          liveUrl="http://liveurl.com/project3"
          repoUrl="http://github.com/project3"
        />
      </div>
    </section>
  );
}
