import { useState } from "react";
import { projects } from "../data";
import Modal from "./Modal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="project" className="relative py-20 bg-pink-light overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-accent/10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-pink-soft/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="relative inline-block font-bold text-3xl text-gray-800 mb-12 pb-4 left-1/2 -translate-x-1/2">
          Project
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[3px] rounded bg-gradient-to-r from-pink-accent to-pink-soft" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl hover:shadow-pink-accent/30"
            >
              <span className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-pink-accent to-pink-soft origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="h-[200px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-1">
                <p className="text-gray-600 font-medium leading-relaxed min-h-[60px] mb-4">
                  {project.title}
                </p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="mt-auto border-2 border-gray-800 text-gray-800 font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-accent hover:to-pink-soft hover:border-pink-accent hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-accent/40"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title}
        tag={activeProject?.tag}
        description={activeProject?.description}
      />
    </section>
  );
}
