import NavBar from "./NavBar";
// import background from '../Images/Background.png'
import '../Style/LandingPage.css'
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

const LandingPage = () => {
    return ( 
        
        <div className="landingpage">     
        <div><NavBar/></div>
        <div className="routes"><Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes></div>    
                       
            {/* <img src={background} alt="" /> */}          
            
            
        </div>
     );
}

export default LandingPage;