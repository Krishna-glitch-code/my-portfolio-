import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Spotify Clone",
    description:
      "A frontend UI clone inspired by Spotify with a sleek and modern interface. Features include responsive design and interactive music player UI.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&q=80",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Krishna-glitch-code/spotify-clone",
    demo: "https://spotify-clone-oi5ev0pm9-krishna-baranwals-projects.vercel.app",
  },
  {
    title: "Weather Application",
    description:
      "Real-time weather application that fetches weather data using APIs. Displays location-based forecasts with a clean and intuitive interface.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80",
    techStack: ["React", "REST API", "CSS", "JavaScript"],
    github: "https://github.com/Krishna-glitch-code/Weather-Application",
    demo: "https://weather-application-smoky-zeta.vercel.app",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Interactive browser-based Tic Tac Toe game with focus on JavaScript logic and smooth UI handling. Features win detection and game reset functionality.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&q=80",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Krishna-glitch-code/TIC-TAC-TOE/tree/master",
    demo: "https://tic-tac-9t2dbvwts-krishna-baranwals-projects.vercel.app/",
  },
  {
    title: "Panda Login Form",
    description:
      "A fun and interactive Panda-themed login form with adorable animations. Features a cute panda that reacts to user input with eye-tracking and cover-eyes effects.",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80",
    techStack: ["React", "Tailwind CSS", "JavaScript", "CSS Animations"],
    github: "https://github.com/Krishna-glitch-code/panda-login-form",
    demo: "https://panda-login-form-1tll.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my frontend development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-violet-600/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 transition-all duration-300 hover:scale-105 hover:border-violet-600/50 hover:bg-violet-600/10" 
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-600/25"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
