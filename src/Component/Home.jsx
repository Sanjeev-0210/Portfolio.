import '../Style/Home.css'
// import profile from '../Images/cut-bg.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';



const Home = () => {
let navigate=useNavigate();
let knowmore=()=>{ 
    navigate('/about')
}



    return (
        <div className='home'>
            <div className="content">
  
                <p>Hello, It's me <h2>Sanjeev C <span id='text-change'>Software Developer</span></h2> and I am a recent graduate with a strong passion for Design and Development.
                    </p>
                    {/* <img src={profile} alt="" /> */}
            </div>
            
           
            <div className="btn">
                <button onClick={knowmore}>Know more <ArrowForwardIosIcon id="arrow" /></button>
            </div>

        </div>
    );
}

export default Home;