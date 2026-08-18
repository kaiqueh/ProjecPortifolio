import { portfolioData } from './data/portfolio-data';
import { useActiveSection } from './hooks/useActiveSection';
import { Header } from './components/Layout/Header';
import { Section } from './components/Layout/Section';
import { AnimatedBar } from './components/ui/AnimatedBar';
import { Hero } from './components/Home/Hero';
import { ResumeSection } from './components/Resume/ResumeSection';
import { ProjectsSection } from './components/Portfolio/ProjectsSection';
import { ContactSection } from './components/Contact/ContactSection';

function App() {
  const { activeSection, navigateTo, isTransitioning } = useActiveSection();

  return (
    <>
      <Header activeSection={activeSection} onNavigate={navigateTo} />
      <AnimatedBar isActive={isTransitioning} />

      <Section id="home" isActive={activeSection === 'home'}>
        <Hero data={portfolioData.personal} />
      </Section>

      <Section id="resume" isActive={activeSection === 'resume'}>
        <ResumeSection />
      </Section>

      <Section id="portfolio" isActive={activeSection === 'portfolio'}>
        <ProjectsSection />
      </Section>

      <Section id="contact" isActive={activeSection === 'contact'}>
        <ContactSection />
      </Section>
    </>
  );
}

export default App;
