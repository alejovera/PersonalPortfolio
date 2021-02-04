/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './styles/Portfolio.css';
import PortfolioItem from './PortfolioItem'; 

const Portfolio = () => {

    
    return(
        <div className='container projects_container'> 
            <div className='row row__card'>    
                <div className='col-4 column__card'>
                    <PortfolioItem
                        title="Este mismo Portafolio" 
                        description="Creado con React JS y CSS, puedo mostrar todos mis trabajos realizados hasta la actualidad"
                        showButton={false}
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem
                        title="Clon de Amazon"
                        description="Sitio que replica a Amazon. Puedes agregar al carrito items y mas. Utiliza React Context y Flexbox de CSS. "
                        showButton={true}
                        url={'https://clone-6c5ca.web.app/'}
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Seguidor de COVID-19 Mundial"
                        description="Sigue los casos de infectados, recuperados y fallecidos de COVID-19 a nivel Mundial"
                        showButton={true}
                        url={'https://trackeador-de-covid-19.web.app/'}
                    />
                </div>

            </div>
            <div className='row'>    
                <div className='col-4'>
                    <PortfolioItem
                        title="La competencia de Netflix"
                        description="Esta página te permite ver tus películas favoritas. Es el Frontend de un programa de Streaming de vídeo con diseño propio"
                        showButton={true}
                        url={'https://portafolio-5c5e8.web.app/'}
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Organizacion de Eventos"
                        description="Puedes agregar invitados, eliminarlos, editarlos, y filtrar la busqueda para encontrar a los participantes que quieras"
                        showButton={true}
                        url={'https://portafolio-5c5e8.web.app/'}
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Clon de TikTok"
                        description="Clon de la versión web de TikTok. Puedes scrollear los vídeos, y darle pausa o seguir reproduciendo cada video. También puedes darle like"
                        showButton={true}
                        url={'https://portafolio-5c5e8.web.app/'}
                    />
                </div>

            </div>
        </div>
    );
};

export default Portfolio;