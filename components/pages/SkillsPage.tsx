import Navbar from "../portfolio/Navbar";
import Skills from "../portfolio/Skills";
import Footer from "../portfolio/Footer";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
