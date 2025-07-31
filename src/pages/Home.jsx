import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../components/Styles.css';
import '../components/darkTheme.css';
import '../components/Navbar.css';

function Home() {

  const theme = useSelector((store)=>store.modeReducer.mode);

  return (
    <>
    <div className={theme ? "home-dark" : "home-light"}>
    <Navbar></Navbar>
    
      
      <div className='home-container'>

        <div className='info-container'>
          <div className='orgin'>
          <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753343095/Group_38_cap9ow.png' className='home-icon'/>
          
          <h1 className='name'>I'm 
            <span className='highlighter'>Vivek</span> 
            <span> <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753343781/Wave_ircoeg.png' className='emoje'/></span>
          </h1>
          <p className='intro-info'>Front-End Developer & Business-Minded Thinker <br/>
              Based in India | Bridging Tech & Business</p>
          <div>
            <a  href="https://drive.google.com/file/d/1A8kDF0Fxp8MpaboweqFlMmYatvfCnsyz/view?usp=drive_link" download="Vivek_CV.pdf" target="_blank">
            <button className='download-btn'>Download CV</button>
            </a>
            <Link to='/contact'><button className='contact-btn-1'>Get in Touch</button></Link>
          </div>
        </div>
        </div>


        <div>
          <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753346459/20250724_123747-removebg-preview_sxlnxr.png' className='profile-img' alt='profile.img'/>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home