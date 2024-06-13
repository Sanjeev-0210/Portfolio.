
import '../Style/Projects.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Projects = () => {

    
    return ( 
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project">
            <div className="container box1">
                <p>01</p>
                <h3>Food Cart</h3>
            <p>Using ReactJS, a responsive food ordering application by fetching item in Json API.</p>
            <a href="https://foodcart-reactjs.netlify.app/" target="_blank" rel="noreferrer"><button id='btn'>Read More<ArrowRightAltIcon/></button></a>
             
            </div>
            <div className="container box2">
            <p>02</p>
            <h3>Bus Reservation App</h3>
            <p>Using Java, SpringBoot for Backend API's as well as ReactJS for UI designing.</p>
            <a href="https://github.com/Sanjeev-0210/Reservation-App" target="_blank" rel="noreferrer"><button  id='btn'>Read More<ArrowRightAltIcon/></button></a>
                 </div>
            <div className="container box3">
            <p>03</p>
            <h3>Portfolio.</h3>
            <p>A responsive simple Portfolio website using ReactJS.</p>
            <a href="https://sanjeev0210c-portfolio.netlify.app/" target="_blank" rel="noreferrer"><button id='btn'>Read More<ArrowRightAltIcon/></button>
            </a>
              </div>
            <div className="container box4">
            <p>04</p>
            <h3>Netflix Clone</h3>
                <p>Clone Netflix website Using HTML, CSS & basic JavaScript.</p>
                <a href="https://github.com/Sanjeev-0210/Netflix-Clone" target="_blank" rel="noreferrer"><button  id='btn'>Read More<ArrowRightAltIcon/></button></a>
            </div>
            <div className="container box5">
            <p>05</p>
            <h3>Audi Clone</h3>
            <p>Audi website clone using Simple HTML & CSS</p>
            <a href="https://github.com/Sanjeev-0210/Audi-Clone-" target="_blank" rel="noreferrer"><button  id='btn'>Read More<ArrowRightAltIcon/></button></a>
            </div>
            <div className="container box6">
            <p>06</p>
            <h3>Room Rental Service</h3>
            <p>Room Rental Service using Linked Hashmap in Java</p>
            <a href="https://github.com/Sanjeev-0210/Room-rental-service" target="_blank" rel="noreferrer"><button  id='btn'>Read More<ArrowRightAltIcon/></button></a>
             
            </div>
            </div>
        </div>
     );
}
 
export default Projects;