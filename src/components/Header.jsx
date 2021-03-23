import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import './styles/Header.css';
const Header= () => {  

  useEffect(() =>{
    Aos.init({ duration: 1500 });
  },[]);

  const [className1, setClassName1 ] = useState('box__title-animated');
  const [className2, setClassName2 ] = useState('box__description-nonanimated');


 
  const handleAnimationEnd = e =>{
    e.preventDefault();
    setClassName1('box__title-nonanimated');
    setClassName2('box__description-animated')
  }

  const handleAnimationEnd2 = e => {
    e.preventDefault();
    setClassName1('box__title-animated');
    setClassName2('box__description-nonanimated')
  }


    return(
    <div className='container-fluid header_container'>
      <div className='row header_row'>
        <div className='col-12 header_column'>
            <div  className={className1} onAnimationEnd={handleAnimationEnd}>
              <h1 className='box-1_title'>Hola! Soy Alejo Vera</h1>
            </div> 
            <div className={className2} onAnimationEnd={handleAnimationEnd2}>
              <h3 className='box-2_description'>Y soy desarrollador Frontend</h3>
            </div> 
        </div>
      </div>
      <div className='row arrowText-row'>
        <div className='col-2 titleArrow-col'>
          <h4 className='arrowText-title'>Conoceme mas</h4>
        </div>
      </div>
      <div className='row arrow-row animated'>
        <div className='col-12'>
          <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
            <path fillRule="evenodd" d="M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
      </div>
    </div>  
    )  
  }


export default Header;
 