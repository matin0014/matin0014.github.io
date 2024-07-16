import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './component/buttonAppBar';
import Hero from "./component/hero"
import Projects from "./component/projects";
function App() {
  return (
    <div className="App">
      
        <ButtonAppBar /> 
        <Hero />
        <Projects />
    </div>
  );
}

export default App;
