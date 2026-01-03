import { 
  Code2, 
  Palette, 
  Globe, 
  GitBranch, 
  Smartphone,
  Server
} from "lucide-react";

const skills = [
  {
    name: "HTML5",
    icon: Code2,
    category: "Frontend",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS3",
    icon: Palette,
    category: "Styling",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "JavaScript (ES6+)",
    icon: Code2,
    category: "Language",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "React.js",
    icon: Code2,
    category: "Framework",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    category: "Styling",
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Bootstrap",
    icon: Palette,
    category: "Framework",
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "REST APIs",
    icon: Server,
    category: "Integration",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    category: "Version Control",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Responsive Design",
    icon: Smartphone,
    category: "Design",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 bg-secondary/30 rounded-2xl border border-border hover:border-violet-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
