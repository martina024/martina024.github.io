import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About"
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Calender from "./Components/Calender";
import Stats from "./Components/Stats";




function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Calender/>
      <Stats/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
