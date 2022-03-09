import React from "react";
import './Skill.css';

export default function Skill() {
    return (
        <div className="skill-wrapper" id="Skill">
        <div className="skill-header">
         <h1>Skill</h1>
         <h5> These are my programming skills !!</h5>
         <div className="line-wrapper">  <div className="inner-line"><div className="about-line"></div> </div>  </div>
         </div>

         <div className="level-content-wrapper">
        <div className="level-wrapper">

        <div className="percentage-wrapper">
        <div className="level-percentage" ><h5>HTML</h5><h5>90%</h5></div>
        <div className="html-level"><div className="in-html-level"></div></div>
        </div>

        <div className="percentage-wrapper">
        <div className="level-percentage" ><h5>CSS</h5><h5>70%</h5></div>
        <div className="css-level"><div className="in-css-level"></div></div>
        </div>

        <div className="percentage-wrapper">
        <div className="level-percentage" ><h5>JAVASCRIPT</h5><h5>60%</h5></div>
        <div className="javascript-level"><div className="in-javascript-level"></div></div>
        </div>

        </div>

        <div className="second-level-wrapper">
        <div className="percentage-wrapper">
        <div className="level-percentage" ><h5>REACT</h5><h5> 70%</h5></div>
        <div className="react-level"><div className="in-react-level"></div></div>
        </div>
        <div className="percentage-wrapper">
        <div className="level-percentage" ><h5>Node JS</h5> <h5>50%</h5></div>
        <div className="node-level"><div className="in-node-level"></div></div>
        </div>
        <div className="percentage-wrapper">
        <div className="level-percentage" ><h5>WORDPRESS</h5><h5>70%</h5></div>
        <div className="wordpress-level"><div className="in-wordpress-level"></div></div>
        </div>
        </div>

        </div>
    
        </div>
    )
        
    
}    