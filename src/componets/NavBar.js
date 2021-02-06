import React from 'react';
import logo from '../image/logo.svg';
import './styles/NavBar.css'
import {Link} from 'react-router-dom';

class NavBar extends React.Component { 
    render() { 
        return (
            <div className='NavBar'>
                <div className='container-fluid' >
              
                <Link to="/" className="Navbar__brand">
                    <img className= "Navbar__brand-logo"  src={logo} alt="" />
                    <span className="font-weight-light">Tecnologia</span>
                    <span className="font-weight-bold">Conf</span>
                </ Link>
                </div>
                  </div>
        )     
    }
}
export default NavBar;