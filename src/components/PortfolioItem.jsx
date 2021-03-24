/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React, {useState} from 'react';
import './styles/PortfolioItem.css';
import sampleImg from '../images/background.png';


const PortfolioItem = (props) =>{
    const [hover, setHover] = useState(false);

    
    const handleMouseover = () =>{
        setHover(true)
    }
    const handleMouseout = () =>{
        setHover(false)
    }
    return(
        <div>
            <div className={hover ? 'card card-hover' : 'card'} onMouseOver={handleMouseover} onMouseOut={handleMouseout}>
                <img className="card-img-top img_card" src={props.image}/>
                <div className={hover ? 'card-body card-body_hover' : 'card-body card-body_normal'}>
                    {props.image ? (
                            <h5 className="card-title">{props.title}</h5>
                        ) : (
                            <h5 className="card-title-noImage">{props.title}</h5>
                        )
                    }    
                    <p className="card-text">{props.description}</p>
                    {props.url ? (
                        <a href={props.url} target="_blank" rel="noreferrer noopener" id="portfolio-btn" className={hover ? 'btn btn-especial' : 'btn btn-warning'}>Ver página Web</a>
                    ) :  
                        <p className="no_display">No boton</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;