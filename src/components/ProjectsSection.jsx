import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gujarati-Sign-Language-Recognition-App",
    description: "Real-time Gujarati Sign Language recognition using webcam, Mediapipe, and TensorFlow..",
    image: "/projects/project1.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    demoUrl: "https://Gujarati-Sign-Language-Recognition-App.app",
    githubUrl: "https://github.com/vivekmoliya/Gujarati-Sign-Language-Recognition-App",
  },
  {
    id: 2,
    title: "Currency Converter",
    description: "Real-time currency conversion app with sleek UI and accurate exchange rates.",
    image: "/projects/project2.png",
    tags: ["React", "API Integration", "CSS"],
    demoUrl: "https://currency-converter-io.netlify.app",
    githubUrl: "https://github.com/vivekmoliya/CurrencyConvertor",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website built using Vite, React, TailwindCSS, and Framer Motion animations.",
    image: "/projects/project3.png",
    tags: ["Vite", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://vivekmoliya.vercel.app",
    githubUrl: "https://github.com/vivekmoliya/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of web apps and tools I’ve built with React and modern frontend tech. Clean code, real features, and responsive designs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vivekmoliya"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
