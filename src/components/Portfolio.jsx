import React, { useState } from 'react';
import './styles/Portfolio.css';
import PortfolioItem from './PortfolioItem'; 
import landingMyTeam from '../images/layout_inner_pages.jpg';
import landingTimeManagment from '../images/time_management.png';
import landingArch from '../images/inner_pages.jpg';
import landingSunny from '../images/landing_sunnyside.png';
import landingNico from '../images/landing_nico.png';
import planetsLanding from '../images/landing_planets.png'
import tinderImage from '../images/tinder-clone-image.jpg';
import streamingVideo from '../images/streamingVideo.jpg';
import facebookImage from '../images/facebook-image.jpg';
import covidImage from '../images/covid-tracker.jpg';
import amazonImage from '../images/amazon-clon.jpg';

const Portfolio = () => {

    
    return(
        <div className='container projects_container'> 
            <div className='row row__card'>    
                <div className='col-4 column__card' id="portfolio">
                    <PortfolioItem
                        title="Este mismo Portafolio" 
                        description="Creado con React JS y CSS, puedo mostrar todos mis trabajos realizados hasta la actualidad. Las imágenes que aparecen en los proyectos representan solo una parte de la totalidad. Los proyectos fueron hosteados con Firebase por lo que son seguros de navegar."
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem
                        title="Clon de Amazon"
                        image={amazonImage}
                        url="https://clone-6c5ca.web.app/"
                        description="Sitio que replica a Amazon. Puedes agregar al carrito items y mas. Utiliza React Context API y Flexbox de CSS. Emula la página de Estados Unidos."
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Seguidor de COVID-19 Mundial"
                        image={covidImage}
                        url="https://trackeador-de-covid-19.web.app/"
                        description="Sigue los casos de infectados, recuperados y fallecidos de COVID-19 a nivel Mundial"
                    />
                </div>

            </div>
            <div className='row row__card'>    
                <div className='col-4'>
                    <PortfolioItem
                        title="Plataforma de Streaming"
                        image={streamingVideo}
                        url="https://streming-videos0.web.app/"
                        description="Esta página te permite ver tus películas favoritas. Es el Frontend de un programa de Streaming de vídeo con diseño propio"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Facebook Clon"
                        image={facebookImage}
                        url="https://facebook-clone0.web.app/"
                        description="Imita la interfaz Frontend de Facebook. Puedes hacer posteos que quedan en una base de datos y tiene autenticacion de usuario"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Clon de Tinder de Mascotas"
                        image={tinderImage}
                        url="https://tinder-clone-for-pets.web.app/"
                        description="Imita la App de Tinder pero para mascotas. En la interfaz puedes deslizar, ir a la seccion de chats y entrar a cada chat privado."
                    />
                </div>

            </div>
            <div className='row'>
                <div className='col-12'>
                    <h2 className="box-2_description">My projects at the Intive React Training</h2>
                </div>
            </div>
            <div className="row row__card">
                <div className="col-4">
                    <PortfolioItem
                        title="Landing Arch"
                        image={landingArch}
                        url="https://tinder-clone-for-pets.web.app/"
                        description="Implementamos React Router, desarrollo mobile, y maquetado en Css"
                    />
                </div>
                <div className="col-4">
                    <PortfolioItem
                        title="Landing de Planetas"
                        image={planetsLanding}
                        url="https://team-venus.netlify.app/mercury"
                        description="Trabajamos con equipos de 3 integrantes. Aplicamos React Router, recibimos data desde un Json, hicimos desarrollo atomizado, entre otros features"
                    />
                </div>
                <div className="col-4">
                    <PortfolioItem 
                        title="Landing MyTeam"
                        image={landingMyTeam}
                        url="https://festive-joliot-af02c7.netlify.app/"
                        description="Hicimos pair programming, una SPA con Js vainilla. Implementamos back4app, MailJs."
                    />
                </div>
            </div>
            <div className="row row__card">
                <div className="col-4">
                    <PortfolioItem
                        title="Landing Time Managment"
                        image={landingTimeManagment}
                        url="https://jeremy-ttd.netlify.app/"
                        description="Implementamos un archivo aparte con la data para simular un back, utilizamos Hooks (useState), un Layout, hicimos prop drilling"
                    />
                </div>
                <div className="col-4">
                    <PortfolioItem
                        title="Landing Sunnyside"
                        image={landingSunny}
                        url="https://landing-sunnyside.netlify.app/"
                        description="Utilice HTML y CSS puros, y es completamente mobile"
                    />
                </div>
                <div className="col-4">
                    <PortfolioItem
                        title="Landing Nico"
                        image={landingNico}
                        url="https://landing-nico.netlify.app/"
                        description="Web estatica utilizando HTML y CSS. Con esta Web aplicamos flex para el layout"
                    />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;