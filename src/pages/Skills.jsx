import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import '../components/Styles.css';
import '../components/darkTheme.css';

function Skills() {

   const theme = useSelector((store)=>store.modeReducer.mode);

  return (
    <>
    <div className={theme ? "skills-dark" : "skills-light"}>
    <Navbar></Navbar>
    
    <div className='skills-main'>
       <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-top'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189093/Vector_6_izpt5a.png' className='style-icon-middle'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-bottom'/>
     
     
      <div className='skill-header'>
          <h1 className='title-text'>My Skillset </h1>
          <p className='title-text-info'>Building, analyzing, innovating.</p>
      </div>
      

      <div className='skills-container'>
        <div className='skill-box'>
          <span className='title'>Web Development</span>
          <div className='skill-bar'>
             <span className='skill-per html'>
                 <span className='tooltip'>90%</span>
             </span>
          </div>
        </div>

         <div className='skill-box'>
          <span className='title'>Frame Works : Tailwind Bootstrap</span>
          <div className='skill-bar'>
             <span className='skill-per frame-works'>
                 <span className='tooltip'>90%</span>
             </span>
          </div>
        </div>

        <div className='skill-box'>
          <span className='title'>ReactJS</span>
          <div className='skill-bar'>
             <span className='skill-per react'>
                 <span className='tooltip'>75%</span>
             </span>
          </div>
        </div>

        <div className='skill-box'>
          <span className='title'>Python</span>
          <div className='skill-bar'>
             <span className='skill-per python'>
                 <span className='tooltip'>80%</span>
             </span>
          </div>
        </div>

        <div className='skill-box'>
          <span className='title'>SQlite</span>
          <div className='skill-bar'>
             <span className='skill-per sql'>
                 <span className='tooltip'>75%</span>
             </span>
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Skills