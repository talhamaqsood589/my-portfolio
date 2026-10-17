import { portfolioData } from "./data/portfolioData";
import { useTheme } from "./hooks/useTheme";
import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="app-shell">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        initials={portfolioData.initials}
        name={portfolioData.name}
      />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience items={portfolioData.experience} />
        <Resume />
        <Contact data={portfolioData} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}