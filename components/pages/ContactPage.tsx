import Navbar from "../portfolio/Navbar";
import Contact from "../portfolio/Contact";
import Footer from "../portfolio/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
