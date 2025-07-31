import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import '../components/Styles.css';
import '../components/darkTheme.css';

function Projects() {

  const theme = useSelector((store)=>store.modeReducer.mode);

  return (<>
     
    <div className={theme ? "project-dark" : "project-light"}>
      
     <Navbar></Navbar>

    <div className='project-main'>
      <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-top'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189093/Vector_6_izpt5a.png' className='style-icon-middle'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-bottom'/>

        <div className='project-section'>

          
          <div className='project-container'>

            <div className='project-card'>
              <div>
                <img src='https://static.vecteezy.com/system/resources/previews/007/642/164/non_2x/headphone-earphone-headset-for-music-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-vector.jpg' alt="project" class="project-icons"/>
                <h1 className='project-title'>Echo-earbuds</h1>
              </div>
              <p className='project-info'>Designed a clean and responsive Echo Earbuds landing page using Tailwind CSS for a sleek frontend experience</p>
               <a href="https://vivek2629.github.io/Echo-earbuds-/" target="_blank" class="indicators">View Project</a>
            </div>

            <div className='project-card'>
              <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1qSmL5ibkwy5wQkz0oXA4VXLscw4zbTjrA&s' alt="project" class="project-icons"/>
                <h1 className='project-title'>Portfolio</h1>
              </div>
              <p className='project-info'>Created a minimal, clean, and smooth personal portfolio website using core frontend technologies for a seamless user experience.</p>
               <a href="https://vivek29.ccbp.tech/" target="_blank" class="indicators">View Project</a>
            </div>

             <div className='project-card'>
              <div>
                <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1741355281/Wikipedia_logo_puzzle_globe_spins_horizontally_and_vertically__revealing_the_contents_of_all_of_its_puzzle_pieces__4K_resolution___VP9_.webm_d0rpw2.jpg' alt="project" class="project-icons"/>
                <h1 className='project-title'>Wikipedia Search Application</h1>
              </div>
              <p className='project-info'>Developed a Wikipedia Search web app using HTML, CSS, JavaScript, and API for quick and easy article lookup.</p>
               <a href="https://searchpedia29.ccbp.tech/" target="_blank" class="indicators">View Project</a>
            </div>

            <div className='project-card'>
              <div>
                <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1741355106/istockphoto-1746104990-612x612_hzhxae.jpg' alt="project" class="project-icons"/>
                <h1 className='project-title'>Todo-List</h1>
              </div>
              <p className='project-info'>Developed a To-Do List web app using HTML, CSS, and JavaScript for efficient task management.</p>
               <a href="https://todolistm29.ccbp.tech/" target="_blank" class="indicators">View Project</a>
            </div>

            

          </div>
        </div>


    </div>

    </div>

    </>
  )
}

export default Projects