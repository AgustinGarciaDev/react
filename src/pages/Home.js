import React from 'react';
import './styles/home.css';
import {Link } from 'react-router-dom';
function Home() { 
    return (
        <div className="container-flux Home">
            <div className="row">
                <div className="col-6 position_tittle">
               <img src="http://baravdg.com/wp-content/uploads/2021/02/platziconf-logo.svg" alt=""/>
                    <h3 className="text_tittle">Print your badges</h3>
                    <p className="text_tittle">The easiest way to manage your conference</p>
                    <Link to="/badges"  className="btn btn-primary "> Star Now! </Link>
                        
                </div>    
                <div className="col-6">
                   <img src="http://baravdg.com/wp-content/uploads/2021/02/astronauts-1.svg" alt=""/>
                </div>  
            </div>   

        </div>
    )
}
export default Home;