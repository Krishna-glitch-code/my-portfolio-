import { GraduationCap, Target, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                alt="Coding workspace"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Frontend Developer & B.Tech Student
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a 3rd-year B.Tech undergraduate student at{" "}
              <span className="text-foreground font-medium">
                Ambalika Institute of Management and Technology
              </span>
              . My passion lies in creating responsive and modern frontend 
              applications that provide excellent user experiences.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I focus on writing clean, maintainable code and staying updated 
              with the latest frontend technologies. Currently, I'm actively 
              seeking frontend developer internship opportunities to apply my 
              skills in real-world projects.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded-xl border border-border hover:border-violet-600/50 transition-colors">
                <GraduationCap className="w-8 h-8 text-violet-600 mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Education</h4>
                <p className="text-sm text-muted-foreground">B.Tech 3rd Year</p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border hover:border-violet-600/50 transition-colors">
                <Target className="w-8 h-8 text-violet-600 mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Goal</h4>
                <p className="text-sm text-muted-foreground">Frontend Internship</p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border hover:border-violet-600/50 transition-colors">
                <Code2 className="w-8 h-8 text-violet-600 mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Focus</h4>
                <p className="text-sm text-muted-foreground">React Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
