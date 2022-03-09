import React from "react";
import './Resume.css';
import {FaCircle} from "react-icons/fa";

export default function Resume() {
    return (
        <div className="resume-wrapper" id="Resume">
        <div className="resume-header">
         
         <h1>Resume</h1>
         <h5>My Formal Bio Details <br></br>   </h5>
         <div className="line-wrapper">  <div className="inner-line"><div className="about-line"></div> </div>  </div>
       
        </div>

         <div className="reume-content-wrapper">
         <div className="sum-container">
         <div>
         <div className="inner-header">
         <h2>Summary</h2>
         <h5>Jemilu Ishaq</h5>
         </div>
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> End Developer with 3+ years of experience..</li>
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> New Karu Fct,abuja.</li>   
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> 09060156930</li>   
          <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> jemiluishaq277@gmail.com</li>
          </div>   
         </div>


         <div className="edu-container">
         
         <div>
         <div className="inner-header">
         <h2>Education</h2>
         <h5>BTch. in Telecom Engineering</h5>
         </div>
         <div className="date-div b-center">2019-2024</div>
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> Federal University of Technology,Minna</li>
         <li><FaCircle color="rgb(255, 68, 0)" size='0.8em' /> Studied Telecommunication Enginering in FUT,<br/>
          Minna    
         </li>
         <div className="inner-header">
         <h5>National Youth Service corp</h5>
         </div>
         <div className="date-div b-center">2024-2025</div>
         <li><FaCircle color="rgb(255, 68, 0)" size='0.8em' /> Ministry of information and communication technology,Fct
         Abuja</li>
         <div className="inner-header">
         <h5>High School</h5>
         </div>
         <div className="date-div b-center">2016-2019</div>
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> Government Secondary School karshi,Abuja  
         </li>

         </div>

         </div>


         <div className="pro-container">
         <div className="inner-header">
         <h2>professional Experience</h2>
         <h5>Senior Telecommunication Engineer</h5>
         </div>
         <div className="date-div btp ">2025-present</div>
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> Worked in many telecommunication companies and organization</li>
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> supervise th assesment of many communication gadgets</li>
         <li> <FaCircle color="rgb(255, 68, 0)" size='0.8em' /> Tour in many wordwide satellite companies</li>
    
        </div>
    
        </div>

        </div>
    )
        
    
}