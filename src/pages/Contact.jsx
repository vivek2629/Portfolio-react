import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import '../components/Styles.css';
import '../components/darkTheme.css';
import './Navbar'
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

function Contact() {
  

  document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("UYqtTt97e9odJWo0W");
});

function sendMail(event) {
    event.preventDefault(); // Prevent page refresh

    // Determine which form is being used
    let isSmallDevice = event.target.querySelector("#inputNameSmall") !== null;

    let name = isSmallDevice ? document.getElementById("inputNameSmall").value : document.getElementById("inputNameLarge").value;
    let email = isSmallDevice ? document.getElementById("inputEmailSmall").value : document.getElementById("inputEmailLarge").value;
    let message = isSmallDevice ? document.getElementById("inputMessageSmall").value : document.getElementById("inputMessageLarge").value;

    // EmailJS parameters
    let templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    email.send("service_ju5pxhg", "template_iipjzv6", templateParams)
        .then(response => {
            alert("✅ Message sent successfully!");
        }, error => {
            alert("❌ Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });

    // Clear form fields after submission
    event.target.reset();
}
   const theme = useSelector((store)=>store.modeReducer.mode);

  return (
    <>
  
   <div className={theme ? "contact-dark" : "-light"}>
    <Navbar></Navbar>

    <div className='contact-main'>
      <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-top'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189093/Vector_6_izpt5a.png' className='style-icon-middle'/>
        <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753189435/Vector_6_1_vcdldi.png' className='style-icon-bottom'/>

    <div style={{ textAlign: "center" }}>
      
      <h1 className='contact-title'> Contact me</h1>
    </div>
    
     

     <div className='contact-section'>
        <form className="contact-container pt-5" onSubmit={sendMail}>
                <input type="text" placeholder="Name" id="inputNameSmall" className="input-contact" required />
                <input type="email" placeholder="Your Mail ID" id="inputEmailSmall" className="input-contact" required />
                <textarea placeholder="Your Message" id="inputMessageSmall" className="input-contact" style={{ height: "120px" }} required></textarea>
                <div className="bottom-contact">
                    <button type="submit" className="contact-btn">Submit</button>
                </div>
            </form>
     </div>
    </div>
    <div className='contact-icons-container'>
         <a href='https://www.linkedin.com/in/t-vivek-757234250/' target="_blank" className='contact-icon'><FaLinkedinIn /></a>
         <a href='https://github.com/vivek2629' target="_blank" className='contact-icon'><IoLogoGithub /></a>
        <a href='https://x.com/The_vivek26' target="_blank" className='contact-icon'><BsTwitterX /></a>
    </div>
  </div>
    </>
  )
}

export default Contact