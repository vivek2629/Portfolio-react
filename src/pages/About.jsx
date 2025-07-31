import '../components/Styles.css';
import '../components/darkTheme.css';
import './Navbar'
import Navbar from './Navbar'
import { useSelector } from 'react-redux';

function About() {

  const theme = useSelector((store)=>store.modeReducer.mode);

  return (
    <>

    <div className={theme ? "about-dark" : "about-light"}>
    <Navbar></Navbar>
    
    <div className='about-main'>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753513688/Group_32_gs1wln.png' className='about-icon-1'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189093/Vector_6_izpt5a.png' className='about-md'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753513689/Vector_3_smzily.png' className='about-icon-2'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753513687/Vector_5_phw5f2.png' className='about-icon-3'/>

     <div className='about-section'>
        <div className='about-card-container'>
            <h1 className='about-heading'>More Than Just a Developer </h1>
            <div className='desktop-version-info'>
                <p>T. Vivek is an Indian Frontend Developer with a passion for creating clean, functional, and user-friendly 
                 digital experiences. Naturally curious and always learning, he combines design thinking with technical skills
                 to craft engaging interfaces. <br/>

                 <br/>
                
                 He holds a Bachelor’s degree in Business Administration (BBA) and is currently sharpening his tech skills 
                 at NxtWave’s CCBP Academy, specializing in full-stack development. Over time, he has built responsive
                 websites, dashboards, and landing pages for various academic and creative projects. <br/>
                 
                 <br/>

                Based in Hyderabad, India, he works independently—exploring branding, generative AI tools, and modern
                web technologies. When he’s not coding, you’ll likely find him capturing nature photos, watching tutorials, or
                sketching fresh ideas for the web.

                </p>
            </div>
           {/* mobile version */}
           <div className='mobile-version-info'>
                <p>Hey, I’m T. Vivek — a Frontend Developer from India, passionate about building clean and functional user interfaces.<br/>

                 <br/>
                
                I completed my BBA and I’m currently leveling up my tech skills with full-stack development at NxtWave. I’ve 
                 worked on websites, dashboards, and creative projects. <br/>
                 
                 <br/>

                When I'm not building something, I'm usually deep-diving into how tech and businesses work—it's
                my kind of fun.

                </p>
            </div>

        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default About