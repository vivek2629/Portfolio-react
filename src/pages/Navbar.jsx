
import {Link} from 'react-router-dom';
import { MdSunny } from "react-icons/md";
import { MdNightsStay } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../redux/modeSlice";
import '../components/Styles.css';
import '../components/darkTheme.css';
import '../components/Navbar.css';

function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((store)=>store.modeReducer.mode)
  const handleTheme = ()=>{
    dispatch(action.darkMode());
  }

  const handleThemeLight = ()=>{
    dispatch(action.lightMode());
  }

  return (
    <>
      <div className={mode ? "navbar-dark" : "navbar-light"}>
      <nav className='nav-container'>
        <div className='nav-logo'>
          <h1 className='title'>VIVEK CRJ</h1>
          {mode ? <MdSunny className='mode-icon-2' onClick={handleThemeLight}/> : <MdNightsStay className='mode-icon' onClick={handleTheme}/>}
        </div>
        <ul className='list-container'>
          <Link to='/home' style={{ textDecoration: "none" }}><li>Home</li></Link>
          <Link to='/about' style={{ textDecoration: "none" }}><li>About</li></Link>
          <Link to='/skills' style={{ textDecoration: "none" }}><li>Skills</li></Link>
          <Link to='/projects' style={{ textDecoration: "none" }}><li>Projects</li></Link>
          <Link to='/contact' style={{ textDecoration: "none" }}><li>Contact</li></Link>
          
        </ul>
      </nav>
      </div>
  
    </>
  )
}

export default Navbar