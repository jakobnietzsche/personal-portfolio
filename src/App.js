import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { IntroPage } from './components/IntroPage';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroPage />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
