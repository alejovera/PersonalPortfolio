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
                        title="Esta funcionando" 
                        description="Este trabajo es lo mejor que vas a ver en tu vida para un chico de 18 perri"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem
                        title="Hola"
                        description="Este trabajo es lo mejor que vas a ver en tu vida para un chico de 18 perri"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Otro"
                        description="Este trabajo es lo mejor que vas a ver en tu vida para un chico de 18 perri"
                    />
                </div>

            </div>
            <div className='row'>    
                <div className='col-4'>
                    <PortfolioItem
                        title="Esto es muy facil"
                        description="Este trabajo es lo mejor que vas a ver en tu vida para un chico de 18 perri"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Bella es la vida"
                        description="Este trabajo es lo mejor que vas a ver en tu vida para un chico de 18 perri"
                    />
                </div>
                <div className='col-4'>
                    <PortfolioItem 
                        title="Asi es"
                        description="Este trabajo es lo mejor que vas a ver en tu vida para un chico de 18 perri"
                    />
                </div>

            </div>
        </div>
    );
};

export default Portfolio;