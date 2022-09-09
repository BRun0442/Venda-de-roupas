import React from 'react';
import './finder.css'
import {useState} from 'react';


function Finder()
{
    let [finder, setFinder] = useState("none");
    // let active = false;

    return(
        <header>
            <div 
            onClick={() => {setFinder("block")}} 
            onMouseLeave={() => {setFinder("none")}} 
            className="finderBar"
            >

                <input placeholder="O que você deseja hoje?" />
                <a href="#">
                    <img src={require('../icons/magnifier.png')}></img>
                </a>
                
                <div style={{display:finder}} className="dropDownMenu">
                    <h3>Sugestões</h3>
                    <ul>
                    
                        <li>Vestido</li>
                        <li>Calça</li>
                        <li>Calça</li>
                        <li>Moletom</li>
                        <li>Vestido</li>
                        <li>Calça</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Finder;