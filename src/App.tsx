import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { HobbiesSection } from './components/HobbiesSection';
import { Footer } from './components/Footer';
import { research, personalProjects, classProjects } from './data/projects';
import { hobbies } from './data/hobbies';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <ProjectSection
        id="research"
        numeral="01"
        numeralSide="left"
        eyebrow="Research & Papers"
        title="Research & Papers"
        accent="navy"
        projects={research}
      />
      <ProjectSection
        id="personal-projects"
        numeral="02"
        numeralSide="right"
        eyebrow="Personal Projects"
        title="Personal Projects"
        accent="gold"
        tinted
        projects={personalProjects}
      />
      <ProjectSection
        id="class-projects"
        numeral="03"
        numeralSide="left"
        eyebrow="Class Projects"
        title="Class Projects"
        accent="navy"
        projects={classProjects}
      />
      <HobbiesSection hobbies={hobbies} />
      <Footer />
    </div>
  );
}

export default App;
