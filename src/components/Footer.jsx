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
                <div className='col-4' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div className="iconsCols">
                        <PeopleIcon className="iconsMaterialUIGroup" style={{ fontSize: 50 }} />
                        <p className='iconParagraph'>LinkedIn</p>
                    </div>
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