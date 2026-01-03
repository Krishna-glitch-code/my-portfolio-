import Navbar from "../portfolio/Navbar";
import About from "../portfolio/About";
import Footer from "../portfolio/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
