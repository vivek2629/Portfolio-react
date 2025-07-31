import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
  const [details, setDetails] = useState(null);
  const [checkMail, setCheckMail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();
  
   useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("Details"));
    setDetails(storedData);
    // localStorage.clear();
   },[])

   const handleLog = (e)=>{
    e.preventDefault();
    const {email, password} = details;
    
    console.log("Logged");
    if (email === checkMail && password === checkPassword){
        alert("logged successfully");
        navigate("/home")
    }
    else{
        alert("Enter correct email and password");
    }
    // console.log(email, password)
   }

  return (
    <>
    <div className='container'>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-top'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189093/Vector_6_izpt5a.png' className='style-icon-middle'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-bottom'/>
        
    {/* Login Nav Bar  */}

    <div className='login-bg-container'>
        <div className='login-nav'>
            <h1 className='login-name'> Login Section </h1>
             <Link to='/sign-up'><button className='login-nav-btn-1'> Sign-Up </button></Link> 
        </div>
    </div>
     
     {/* Login Form  */}
     
     <div className='interface-container'>
        <div>
            <form className='form-container'>
                <h2 className='form-heading'>Welcome</h2>
                <div className='input-container'>
                    <input type='email' placeholder='Enter Your Email ID' className='input-box'
                     onChange={(e)=>{setCheckMail(e.target.value)}}></input>
                    <input type='text' placeholder='Password' className='input-box'
                     onChange={(e)=>{setCheckPassword(e.target.value)}}></input>
                </div>
                
                <Link to='/home'><button type="submit" className='login-nav-btn-2' onClick={handleLog}> Log-In </button></Link>
            </form>
        </div>
     </div>
      
      
        

    </div>

    
    </>
  )
}

export default Login