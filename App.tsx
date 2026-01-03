import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutPage from "./components/pages/AboutPage";
import SkillsPage from "./components/pages/SkillsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ServicesPage from "./components/pages/ServicesPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
