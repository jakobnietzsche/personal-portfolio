import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
    </div>
  );
}

export default App;
