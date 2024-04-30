// import { useState } from 'react';
import cv from '../Images/Sanjeev_CV.pdf'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import '../Style/About.css'



const About = () => {
    return (
        <section>
            <div className='about'>
                <h2><u>About Me</u></h2>
            <p>
                I'm Sanjeev, a recent graduate with a degree in B.E(Computer Science and Engineering). While my journey in the professional world may be just beginning, my enthusiasm and eagerness to learn are boundless.
                Throughout my academic career, I've developed a strong foundation in Java Full Stack Developement & Web Designing. 
                What excites me most about Software Developer is its dynamic nature and the opportunity it presents to make a meaningful impact. Whether it's through Problem-Solving and DSA, I'm eager to contribute my skills and fresh perspectives to tackle real-world challenges and drive innovation.
                In this portfolio, you'll find a glimpse of my academic projects, internships, and extracurricular activities. While I may lack extensive professional experience, I'm committed to continuous growth and development. I'm ready to roll up my sleeves, dive into new experiences, and seize every opportunity to expand my knowledge and skills.
                I believe that success is not just about what you know, but how willing you are to learn and adapt. With a curious mind and a strong work ethic, I'm excited about the possibilities that lie ahead and the chance to make a difference in Software Developer.
            </p>
            <a href={cv} download="Sanjeev_CV.pdf"><button>Download CV <CloudDownloadIcon style={{height:"18px"}}/></button></a>
        </div>
        </section>
    );
}

export default About;