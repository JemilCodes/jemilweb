import React from "react";
import { Link } from "react-scroll";
import {FaCircle} from "react-icons/fa";

import './AboutMe.css';
import aboutimg from './jentle.jpg';

export default function AboutMe() {
    return (
        <div className="aboutme" id="AboutMe">
        <div className="aboutme-header">
         <h1>About Me</h1>
         <h6>Why choose me ? <br></br>
      <div className="line-wrapper">  <div className="inner-line"><div className="about-line"></div> </div>  </div>
         </h6>
         </div>
         <div className="content-container">
         
         <img className="abt-img" src={aboutimg}
            alt="no internet connection"
            /> 
         
         <div className="text-wrapper">
             <p>
                 full stack web and mobile developer with background knowledge of mern stacks with
                 redux, along with  a passion for building application with utmost efficiency. strong 
                 professional with  a BST willing to be an asset of an organization.
             </p>
             
            <h4> Here are Few highlights about me:</h4>
             
            <div className="list-wrapper">
            <div className="circle-icon-2"></div>
            <li> <FaCircle color="coral"  size='0.8em' /> Full stack web and mobile development</li> 
            </div>
            <div className="list-wrapper">
            <div className="circle-icon-2"></div>
            <li> <FaCircle color="coral"  size='0.8em'/> interactive Front end as per design</li> 
            </div>
            <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li> <FaCircle color="coral"  size='0.8em' /> redux for state Management</li> 
            </div>
            <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li> <FaCircle color="coral"  size='0.8em' /> React and React Native</li> 
            </div>
            <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li> <FaCircle color="coral" size='0.8em' />  managing database</li> 
            </div>
              
             
               <br></br>
              <div className='profile-options abtnd'>
              <Link
            
            activeclass="active"
            to="ContactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className="btn primary-btn">
                {""}
                Hire Me{""}
              </button>
          </Link>
                       <a href='ehizcv.pdf' download="ehiedu ehizcv.pdf">
                           <button className='btn highlighted-btn ' >Get Resume</button>    
                       </a>

                       </div>
                </div>



         </div>
    
        </div>
    )
        
    
}