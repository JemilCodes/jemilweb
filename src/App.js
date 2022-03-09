import './App.css';
import Home from './Component/Home/Home';
import AboutMe from './Component/AboutMe/AboutMe';
import Resume from './Component/Resume/Resume';
import Testimonial from './Component/Testimonial/Testimonial';
import ContactMe from './Component/ContactMe/ContactMe';
import Skill from './Component/Skill/Skill';
import Project from './Component/Project/Project';
import ScrollToTop from './Component/ScrollToTop/ScrollToTop';




function App() {
    return (
    <div className="App">
     <Home/>
     <AboutMe/>
     <Resume/> 
     <Skill/> 
     <Project/>
     <Testimonial/>  
     <ContactMe/>
     <ScrollToTop scrollStepInPx="50" delayInMs = "30" />
    </div>
    );
   }

export default App;