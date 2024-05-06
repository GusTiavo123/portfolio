import Project from "../components/project/Project";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import RandomTypewriter from "../effects/RandomTypewritter";


export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl z-10 mt-44">
      <RandomTypewriter text="<Recent Work />" />
      <FadeInWhenVisible>
        <div className="flex mt-8">
          <div className="flex flex-1 mr-8 w-full">
            <Project
              src="project1.mp4"
              title="IdeaNova"
              description="Website App for a fictional company featuring a contact form and modern login via NextAuth credentials. Authenticated users can access an internal blog to create and delete posts."
              technologies={"Next.js - CSS - HTML - MongoDB - NextAuth"}
              liveUrl="https://idea-nova.vercel.app/"
              repoUrl="https://github.com/GusTiavo123/IdeaNova"
            />
          </div>
          <div className="flex flex-1 ml-8 w-full">
            <Project
              src="project2.mp4"
              title="Nextxkcd"
              description="Web application that provides a comic browsing experience, featuring a custom scraper for XKCD comics. Users can search comics, toggle between night and light modes for enhanced readability,"
              technologies={"Next.js - TailwindCSS - ShadcnUI - Scraping"}
              liveUrl="https://github.com/GusTiavo123/Comics-page"
              repoUrl="https://github.com/GusTiavo123/Comics-page"
            />
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="flex mt-16">
          <div className="flex flex-1 mr-8 w-full">
            <Project
              src="project3.mp4"
              title="MovieCloud"
              description="Web application that provides detailed information on movies and TV series, utilizing the OMDb API.The platform ensures a seamless and engaging UX/UI, enabling effortless exploration and discovery of cinematic content."
              technologies={"React - CSS - HTML - API"}
              liveUrl="https://github.com/GusTiavo123/moviecloud"
              repoUrl="https://github.com/GusTiavo123/moviecloud"
            />
          </div>
          <div className="flex flex-1 w-full flex-col items-center justify-center ml-8 bg-custom-box-dark rounded-xl border-t-2 border-custom-box-border">
            <h2 className="text-3xl text-white font-semi-bold mb-4">
              Coming Soon
            </h2>
            <p className="text-custom-gray text-md">
              New projects ideas coming soon...
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
