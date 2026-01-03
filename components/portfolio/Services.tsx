import { Monitor, Smartphone, Code2, Palette } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Website Development",
    description:
      "Building modern, responsive websites using the latest frontend technologies like React.js and Tailwind CSS.",
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts",
    description:
      "Creating mobile-first, fully responsive designs that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: Palette,
    title: "Modern UI Design",
    description:
      "Implementing clean and modern user interfaces with attention to detail, animations, and user experience.",
  },
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description:
      "Writing well-structured, documented, and maintainable code following industry best practices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Services I can provide as a frontend developer
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-secondary/30 rounded-2xl border border-border hover:border-violet-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
