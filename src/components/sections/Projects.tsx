import Project from "../project/Project";
import FadeInWhenVisible from "../effects/FadeInWhenVisible";
import RandomTypewriter from "../effects/RandomTypewritter";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl md:max-w-7xl z-10 lg:mt-44 md:mt-40 mt-32"
    >
      <RandomTypewriter text="<Projects />" />
      <div className="flex flex-col sm:flex-row mt-6 md:mt-9">
          <div className="w-full mb-8 md:mb-0 md:mr-8 md:flex-1">
          <FadeInWhenVisible>
            <Project
              src="videos/project1.mp4"
              title="IdeaNova"
              description="Website App for a fictional company featuring a contact form and modern login via NextAuth credentials. Authenticated users can access an internal blog to create and delete posts."
              technologies={"Next.js - CSS - HTML - MongoDB - NextAuth"}
              liveUrl="https://idea-nova.vercel.app/"
              repoUrl="https://github.com/GusTiavo123/IdeaNova"
              poster="videos/project1.png"
            />
            </FadeInWhenVisible>
          </div>
          <div className="w-full mb-8 md:mb-0 md:ml-8 md:flex-1">
          <FadeInWhenVisible>
            <Project
              src="videos/project2.mp4"
              title="Nextxkcd"
              description="Web application that provides a comic browsing experience, featuring a custom scraper for XKCD comics. Users can search comics, toggle between night and light modes for enhanced readability."
              technologies={"Next.js - TailwindCSS - ShadcnUI - Scraping"}
              liveUrl="https://github.com/GusTiavo123/Comics-page"
              repoUrl="https://github.com/GusTiavo123/Comics-page"
              poster="videos/project2.png"
            />
            </FadeInWhenVisible>
          </div>
      </div>
      <FadeInWhenVisible>
        <div className="flex flex-col sm:flex-row md:mt-16">
          <div className="w-full md:mr-8 md:flex-1">
            <Project
              src="videos/project3.mp4"
              title="MovieCloud"
              description="Web application that provides detailed information on movies and TV series, utilizing the OMDb API. The platform ensures a seamless and engaging UX/UI, enabling effortless exploration and discovery of cinematic content."
              technologies={"React - CSS - HTML - OMDbAPI"}
              liveUrl="https://github.com/GusTiavo123/moviecloud"
              repoUrl="https://github.com/GusTiavo123/moviecloud"
              poster="videos/project3.png"
            />
          </div>
          <div className="hidden md:flex md:flex-col md:flex-1 md:items-center md:justify-center md:ml-8 bg-custom-box-dark rounded-xl border-t-2 border-custom-box-border">
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
