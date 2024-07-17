import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './component/buttonAppBar';
import Hero from "./component/hero"
import Projects from "./component/projects";
import Techstack from "./component/techstack"
function App() {
  return (
    <div className="App">
      
        <ButtonAppBar /> 
        <Hero />
        <Techstack />
        <Projects />
        
        
    </div>
  );
}

export default App;
