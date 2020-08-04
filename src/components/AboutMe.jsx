import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import './styles/AboutMe.css';
import sampleImage from '../images/background.png';

const AboutMe = () =>{

    useEffect(() =>{
        Aos.init({ duration: 1500 });
    },[]);

    return(
        <div>
            <div className='meContainer'>
                <div className="row meRow" id="about" >
                    <div data-aos="fade" className='titleCol col'> 
                        <h3 className="meTitle">ACERCA DE MI</h3>
                    </div>
                </div>
                <div className="row meRow">
                    <div data-aos="slide-right" className="col-8 meInfo">

                        <p>
                            ¡Hola! Yo soy Alejo y soy desarrollador Frontend. Tengo habilidades para HTML, CSS, y JS. Desarrollo mis interfaces utilizando la librería React y Redux para el manejo de información (en caso de que sea necesario). También se utilizar sistemas de control de versiones como Git, y usar GitHub para el trabajo en equipo. 
                            <br />
                            A pesar de ser joven vengo programando desde que tengo 15 años, y tengo varios proyectos realizados, algunos de los cuales se encuentran en GitHub.
                            <br />
                            He realizado muchos cursos por Internet en varias tecnologías diferentes.                    
                        </p>
                    </div>
                    <div data-aos="slide-left" className="col-4">
                        <img src={sampleImage} className="meImg" alt='' />
                    </div>
                </div>
                    <div data-aos="slide-right">
                        <p className="meQualities">Estas son mis habilidades:</p>
                        <div className="progress mb-2">
                            <div className="progress-bar bar-1 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">HTML</div>
                        </div>
                        <div className="progress mb-2">
                            <div className="progress-bar bar-2 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">CSS</div>
                        </div>
                        <div className="progress mb-2">
                            <div className="progress-bar bar-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JS y React</div>
                        </div>
                        <div className="progress mb-2">
                            <div className="progress-bar bar-4 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Redux</div>
                        </div> 
                    </div>
             </div> 
        </div>
            /* :
             <div className='meContainer' >
                <div className="row meRow" id="about" >
                    <div className='titleCol col'> 
                        <h3 className="meTitle">ACERCA DE MI</h3>
                    </div>
                </div>
                <div className="row meRow">
                    <div className="col-8 meInfo">

                        <p>
                            ¡Hola! Yo soy Alejo y soy desarrollador Frontend. Tengo habilidades para HTML, CSS, y JS. Desarrollo mis interfaces utilizando la librería React y Redux para el manejo de información (en caso de que sea necesario). También se utilizar sistemas de control de versiones como Git, y usar GitHub para el trabajo en equipo. 
                            <br />
                            A pesar de ser joven vengo programando desde que tengo 15 años, y tengo varios proyectos realizados, algunos de los cuales se encuentran en GitHub.
                            <br />
                            He realizado muchos cursos por Internet en varias tecnologías diferentes.                    
                        </p>
                    </div>
                    <div className="col-4">
                        <img src={sampleImage} className="meImg" alt='' />
                    </div>
                </div>
                
                    <p className="meQualities">Estas son mis habilidades:</p>
                    <div className="progress mb-2">
                        <div className="progress-bar bar-1 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">HTML</div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar bar-2 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">CSS</div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar bar-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JS y React</div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar bar-4 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Redux</div>
                    </div> 
            </div>        
            } */
            
    )
}




export default AboutMe;