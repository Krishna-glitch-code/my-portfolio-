import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Krishna Baranwal
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Frontend Developer | B.Tech 3rd Year Undergraduate
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Actively seeking Frontend Developer Internship opportunities. 
              Passionate about building responsive and modern web applications 
              with clean UI and great user experience.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                React.js
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                Responsive Design
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-violet-600/30 shadow-2xl ring-4 ring-violet-600/10 ring-offset-4 ring-offset-background">
                <img
                  src="/images/for-portfolio.jpg"
                  alt="Krishna Baranwal"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-40"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-violet-500 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
