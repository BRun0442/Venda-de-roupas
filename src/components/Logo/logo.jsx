import React from 'react';
import './logo.css';
import imgLogo from '../bigLogo_v2.png'

function Logo(){
    return(
        <a href="#">
            <div className="logo"><img src={imgLogo}/></div>
        </a>
    );
}

export default Logo;