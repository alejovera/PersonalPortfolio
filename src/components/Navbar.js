import React from 'react';
import './styles/Navbar.css';
class Navbar extends React.Component {
  render(){
    return(
      <nav className="navbar fixed-top navbar-expand-md bg-dark overflow-hiden px-0 mb-6">
        <a className="navbar-brand" href="#">Alejo Vera</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse barra" id="navbarCollapse">
          <ul className="navbar-nav mr-1">
            <li className="nav-item pr-2">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link" href="#">Sobre mi</a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
            <button className="btn btn-outline-warning my-sm-0 mr-2" type="submit">Contactame</button>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Navbar;
