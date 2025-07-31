import { Link } from 'react-router-dom'
import { useState } from 'react'

function Singup() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [result, setresult] = useState("Welcome")
    // const handleName=(e)=>{
    //     setUserName(e.target.value);
    //     console.log(userName)
    // }

    // const handleEmail = (e)=>{
    //     setEmail(e.target.value);
    //     console.log(email)
    // }

    // const handlePassword = (e)=>{
    //     setPassword(e.target.value);
    //     console.log(password)
    // }
    const detailsObj = {
        name: userName,
        email: email,
        password: password
    }
    function handleSubmit(e){
         e.preventDefault();
         if (userName === "" || email === "" || password === ""){
            alert("Please fill all the fields");
         }
         else{
            
            console.log(detailsObj);
            localStorage.setItem("Details", JSON.stringify(detailsObj));
            setresult("Account is Created Successfully, Now Login");
            
         }
         
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
            <Link to="/"><button className='login-nav-btn-1'> Log-In </button></Link> 
        </div>
    </div>
     
     {/* Login Form  */}
     
     <div className='interface-container'>
        <div>
            <form className='form-container'>
                <h2 className='form-heading'>{result}</h2>
                <div className='input-container'>
                    <input type='text' placeholder='Enter Your Name' className='input-box' onChange={(e)=>{setUserName(e.target.value)}}></input>
                    <input type='email' placeholder='Enter Your Email ID' className='input-box' onChange={(e)=>{setEmail(e.target.value)}}></input>
                    <input type='text' placeholder='Password' className='input-box' onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                
                <button type="submit" className='login-nav-btn-2' onClick={handleSubmit}> Sign-Up </button>
            </form>
        </div>
     </div>
      
      
        

    </div>

    
    </>

  )
}

export default Singup