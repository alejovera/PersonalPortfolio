/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './styles/Portfolio.css';
import PortfolioItem from './PortfolioItem'; 
import sampleImg from '../images/background.png';
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
            <div className='row'>    
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
        </div>
    );
};

export default Portfolio;