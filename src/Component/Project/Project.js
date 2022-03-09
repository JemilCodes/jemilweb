import React from 'react';
import './Project.css';

export default function Project() {
    return (

        <div className="project-wrapper" id="Project">
        
        <div className="project-header">
        <h1>Project</h1>
        <h5>Here are awesome projects I have built just for fun !!</h5>
        <div className="line-wrapper">  <div className="inner-line"><div className="about-line"></div> </div>  </div>   
        </div>

        <div className='project-content-wrapper'>

        <div>
        <h5>Personal Portofolio Website</h5>    
        <h6>Technologies Used: React JS, Font awsome</h6>
        <div className='p-content'>
        <p>A Personal Portofolio Website to showcase all my deatils and project at one space</p>
        <div className="text-div p-float">2021-2022</div>
        </div>
        </div>
        <div>
        <h5>Facedetector Website</h5>    
        <h6>Technologies Used: React JS, Clarifai API, Particle JS</h6>
        <div className='p-content'>
        <p>An awesome Website that detects the faces in any image</p>
        <div className="text-div p-float">2020-2021</div>
        </div>
        </div>
        <div>
        <h5>Super Gradient Generator</h5>    
        <h6>Technologies Used: HTML, CSS, JAVASCRIPT</h6>
        <div className='p-content'>
        <p>An Incredible Application for picking any colour gradient of your choice </p>
        <div className="text-div p-float">2020-2021</div>
        </div>
        </div>
        <div>
        <h5>Robots Friend App</h5>    
        <h6>Technologies Used: React JS</h6>
        <div className='p-content'>
        <p>A Fun App that has an incredible search engine functionality </p>
        <div className="text-div p-float">2020-2021</div>
        </div>
        </div>




        </div>
        


        </div>



    ) 





}
