import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.css';
import PeopleIcon from '@material-ui/icons/People';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Footer = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    const handleMouseOver1 = () => {
        setHover1(true)
    }
    const handleMouseOut1 = () => {
        setHover1(false)
    }
    
    const handleMouseOver2 = () => {
        setHover2(true)
    }
    const handleMouseOut2 = () => {
        setHover2(false)
    }

    const handleMouseOver3 = () => {
        setHover3(true)
    }
    const handleMouseOut3 = () => {
        setHover3(false)
    }

    return(
        <div className='container-fluid'>
            <div className='row rowFooter'>
                <div className='col-3 px-0 mr-5 ml-5' onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}>
                    <a href="https://www.linkedin.com/in/alejo-vera/" className="footer__anchor">
                        <div className={hover1 ? 'iconsCols iconsCols__hover' : 'iconsCols iconsCols__static'}>
                            <PeopleIcon className={hover1 ? 'iconsMaterialUIGroup iconsMaterialUIGroup__hover' : 'iconsMaterialUIGroup iconsMaterialUIGroup__static'} style={{ fontSize: 50 }} />
                            <p className={hover1 ? 'iconParagraph iconParagraph__hover' : 'iconParagraph iconParagraph__static'}>LinkedIn</p>
                        </div>
                    </a>
                </div>

                <div className='col-3 px-0 ml-5 mr-5' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                    <div className={hover2 ? 'iconsCols iconsCols__hover' : 'iconsCols iconsCols__static'}>
                        <MailIcon className={hover2 ? 'iconsMaterialUIMail iconsMaterialUIMail__hover' : 'iconsMaterialUIMail iconsMaterialUIMail__static'} style={{ fontSize: 50 }} />
                        <p className={hover2 ? 'iconParagraph iconParagraph__hover' : 'iconParagraph iconParagraph__static'}>Mail</p>
                    </div>
                </div>
                <div className='col-3 px-0 ml-5 mr-5' onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
                    <Link to="/pdf">
                        <div className={hover3 ? 'iconsCols iconsCols__hover' : 'iconsCols iconsCols__static'}>
                            <AccountCircleIcon className={hover3 ? 'iconsMaterialUICV iconsMaterialUICV__hover' : 'iconsMaterialUICV iconsMaterialUICV__static'} style={{ fontSize: 50 }} />
                            <p className={hover3 ? 'iconParagraph iconParagraph__hover' : 'iconParagraph iconParagraph__static'}>CV</p>
                        </div>
                    </Link>
                </div>                
            </div>
        </div>
    )
}

export default Footer;