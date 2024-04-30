import '../Style/Contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRef} from 'react';

const Contact = () => {
    let phone=useRef("")
    let email=useRef("")
    let msg=useRef("")
    

   
    let sendmsg=()=>{
        
    }
    return ( 
        <div className="contact">
            <div className="se-contact">
                <span>~Let's connect</span>
                <h2>Get-in-Touch</h2>
                <p style={{display:"flex",alignItems:"center"}}><LocationOnIcon style={{marginRight:"10px"}}/> TN, India </p>
            <p style={{display:"flex",alignItems:"center"}}><PhoneIcon style={{marginRight:"10px"}}/> +91-9500366015</p>
            <p style={{display:"flex",alignItems:"center"}}><EmailIcon style={{marginRight:"10px"}}/> sanjeev0210c@gmail.com</p>
            <div className="social-media">
                <h3>Follow me</h3>
                <p>Follow me on social media</p>
            <a href="https://www.instagram.com/_seeking_4_u_bby_/?utm_medium=copy_link" target="_blank" rel="noreferrer"><InstagramIcon className='icon' /></a>  
                <a href="https://www.linkedin.com/in/sanjeev-c-915447214" target="_blank" rel="noreferrer"><LinkedInIcon className='icon' /></a>  
                <a href="https://github.com/Sanjeev-0210" target="_blank" rel="noreferrer"><GitHubIcon className='icon' /></a>    
                <a href="https://wa.me/qr/FEJLL43N4Y3YI1" target="_blank" rel="noreferrer"><WhatsAppIcon className='icon' /></a>  
            </div>
            </div>
            <div className="msg">
                <form onSubmit={sendmsg}>
                <section><input 
                ref={phone} 
                type="text" placeholder='Phone Number' required />
                <input
                ref={email}
                 type="email" placeholder='Email Address' required/></section>
                <textarea
                ref={msg} 
                 cols="55" rows="15" placeholder='Message...' required></textarea> <br />
                <button>Send Message</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;