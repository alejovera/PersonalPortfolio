import React, {useState} from 'react';
import './styles/Footer.css';

const Footer = () => {
    const [hover, setHover] = useState(false)

    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOut = () => {
        setHover(false)
    }
    
    return(
        <div className='container-fluid'>
            <div className='row rowFooter'>
                <div className='col-4' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div className="iconsCols">
                        <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-people-fill icons" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>
                        <p className='iconParagraph'>LinkedIn</p>
                    </div>
                </div>
                <div className='col-4 iconsCols' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-envelope icons" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                        <p className='iconParagraph'>Mail</p>
                </div>
                <div className='col-4 iconsCols' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-person-circle icons" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                        <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                    </svg>
                    <p className='iconParagraph'>CV</p>
                </div>                
            </div>
        </div>
    )
}

export default Footer;