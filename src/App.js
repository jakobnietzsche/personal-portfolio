import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { IntroPage } from './components/IntroPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroPage />
    </div>
  );
}

export default App;
