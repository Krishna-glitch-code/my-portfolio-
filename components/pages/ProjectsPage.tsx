import Navbar from "../portfolio/Navbar";
import Projects from "../portfolio/Projects";
import Footer from "../portfolio/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
