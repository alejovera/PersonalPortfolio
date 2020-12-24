/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './styles/Portfolio.css';
import PortfolioItem from './PortfolioItem'; 
import sampleImg from '../images/background.png';

const Portfolio = () => {

    
    return(
        <div className='container projects_container'> 
            <div className='row row__card'>    
                <div className='col-4 column__card'>
                    <PortfolioItem
                        title="Este mismo Portafolio" 
                        description="Creado con React JS y CSS, puedo mostrar todos mis trabajos realizados hasta la actualidad"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem
                        title="Clon de Amazon"
                        description="Sitio que replica a Amazon. Puedes agregar al carrito items y mas. Utiliza React Context y Flexbox de CSS. Klkjfalkjdflk jl a kdfjalk jflsajd ljdlf jalj jk lsajdf lk"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Seguidor de COVID-19 Mundial"
                        description="Sigue los casos de infectados, recuperados y fallecidos de COVID-19 a nivel Mundial"
                    />
                </div>

            </div>
            <div className='row'>    
                <div className='col-4'>
                    <PortfolioItem
                        title="La competencia de Netflix"
                        description="Esta página te permite ver tus películas favoritas. Es el Frontend de un programa de Streaming de vídeo con diseño propio"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
<<<<<<< HEAD
                        title="Organizacion de Eventos"
                        description="Puedes agregar invitados, eliminarlos, editarlos, y filtrar la busqueda para encontrar a los participantes que quieras"
=======
                        title="NBA APP"
                        description="Puedes ver las estadísticas de jugadores y equipos, y además puedes crear tu propio Dream Team "
>>>>>>> c33bdb46013332adb54f26102111504977623ef3
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Clon de TikTok"
                        description="Clon de la versión web de TikTok. Puedes scrollear los vídeos, y darle pausa o seguir reproduciendo cada video. También puedes darle like"
                    />
                </div>

            </div>
        </div>
    );
};

export default Portfolio;