// @flow strict

import { projectsData } from "@/utils/data/projects-data";

function Projects() {
  return (
    <div id="projects" className="my-12 lg:my-16 text-white">

      {/* Section Title */}
      <h1 className="text-3xl font-bold text-center mb-10 text-[#16f2b3]">
        My Projects
      </h1>

      {/* Categories */}
      {["Web Development", "Machine Learning"].map((category) => (
        <div key={category} className="mb-12">

          {/* Category Title */}
          <h2 className="text-2xl font-semibold text-[#16f2b3] mb-6">
            {category}
          </h2>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData
              .filter((project) => project.category === category)
              .map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-lg border border-[#2a2f4c] bg-[#11152c] hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>

                  <p className="text-sm text-[#16f2b3] mb-3">
                    {project.tools.join(", ")}
                  </p>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm underline"
                  >
                    View Code
                  </a>
                </div>
              ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Projects;