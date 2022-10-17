import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { IntroPage } from './components/IntroPage';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroPage />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
