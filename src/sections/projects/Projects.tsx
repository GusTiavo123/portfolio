import Project from "../../components/project/Project";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl z-10 my-44">
      <h2 className="text-white text-3xl font-bold my-8">{"<Projects />"}</h2>
      <div className="space-y-14">
        <Project
          src="project1.mp4"
          alt="video project IdeaNova"
          title="IdeaNova"
          description="Website App for a fictional company featuring a contact form and modern login via NextAuth credentials. Authenticated users can access an internal blog to create and delete posts."
          technologies={["React", "TailwindCSS", "Firebase"]}
          liveUrl="https://idea-nova.vercel.app/"
          repoUrl="https://github.com/GusTiavo123/IdeaNova"
        />
        <Project
          src="project2.mp4"
          alt="video project Nextxkcd"
          title="Nextxkcd"
          description="This is a brief description of Project 2."
          technologies={["React", "TailwindCSS", "Firebase"]}
          liveUrl="https://github.com/GusTiavo123/Comics-page"
          repoUrl="https://github.com/GusTiavo123/Comics-page"
        />
        <Project
          src="project3.mp4"
          alt="video project MovieCloud"
          title="MovieCloud"
          description="This is a brief description of Project 3."
          technologies={["Vue", "Vuetify", "Netlify"]}
          liveUrl="https://github.com/GusTiavo123/moviecloud"
          repoUrl="https://github.com/GusTiavo123/moviecloud"
        />
      </div>
    </section>
  );
}
