import React, {useState} from 'react';
import './styles/Footer.css';
import PeopleIcon from '@material-ui/icons/People';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                <div className='col-4 iconsCols' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <PeopleIcon className={hover ? 'iconsMaterialUIGroup iconsMaterialUIGroup__hover' : 'iconsMaterialUIGroup iconsMaterialUIGroup__static'} style={{ fontSize: 50 }} />
                    <p className={hover ? 'iconParagraph iconParagraph__hover' : 'iconParagraph iconParagraph__static'}>LinkedIn</p>
                </div>
                <div className='col-4 iconsCols' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <MailIcon className="iconsMaterialUIMail" style={{ fontSize: 50 }} />
                        <p className='iconParagraph'>Mail</p>
                </div>
                <div className='col-4 iconsCols' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <AccountCircleIcon className="iconsMaterialUICV" style={{ fontSize: 50 }} />
                    <p className='iconParagraph'>CV</p>
                </div>                
            </div>
        </div>
    )
}

export default Footer;