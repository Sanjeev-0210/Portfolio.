import { Link } from 'react-router-dom';
import '../Style/NavBar.css'
import profile from '../Images/profile.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
const NavBar = () => {

    let menudrop=()=>{
        // let links=document.getElementsByClassName("links")
        // if(links.style.display=='none'){
        //     links.style.display='block';
        // }
        // else{
        //     links.style.display='none';
        // }
        }
    
    return ( 
        <div className="navbar">
            <div><img src={profile} alt=""/>
            <p>Sanjeev</p></div>
            
            <div className="links">
                
                <Link to="/home" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/skills" className='link'>Skills</Link>
                <Link to="/projects" className='link'>Projects</Link>
                <Link to="/contact" className='link'>Contact</Link>
                <div className="media" >
                <a href="https://www.instagram.com/_seeking_4_u_bby_/?utm_medium=copy_link" target="_blank" rel="noreferrer"><InstagramIcon className='icon' /></a>  
                <a href="https://www.linkedin.com/in/sanjeev-c-915447214" target="_blank" rel="noreferrer"><LinkedInIcon className='icon' /></a>  
                <a href="https://github.com/Sanjeev-0210" target="_blank" rel="noreferrer"><GitHubIcon className='icon' /></a>    
                <a href="https://wa.me/qr/FEJLL43N4Y3YI1" target="_blank" rel="noreferrer"><WhatsAppIcon className='icon' /></a>
            </div>            
            </div>
            <p id='menu' onClick={menudrop}><MenuIcon/></p>
            <div>
                <span>Copyright &copy; 2024 SanjeevC0210. All rights reserved.</span>
            </div>
           
        </div>
     );
}
 
export default NavBar;