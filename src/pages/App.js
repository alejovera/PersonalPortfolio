import React from 'react';
import 'animate.css';
import '../pages/Main.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function App() {
    return (
        <div className='container-fluid big_container'>
            <Navbar className='mb-2'/>
            <Header />
            <AboutMe/>
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
