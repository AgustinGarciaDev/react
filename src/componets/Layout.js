import React from 'react';
import NavBar from '../componets/NavBar';

function Layout(props) { 
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
  }

export default Layout;