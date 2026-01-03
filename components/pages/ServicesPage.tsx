import Navbar from "../portfolio/Navbar";
import Services from "../portfolio/Services";
import Footer from "../portfolio/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
