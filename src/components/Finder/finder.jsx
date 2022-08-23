import React from 'react';
import './finder.css'
import {useState} from 'react';


function Finder()
{
    let [finder, setFinder] = useState(false);
    // let active = false;

    return(
        <header>
            <div 
            onClick={() => {setFinder(false)}} 
            onMouseLeave={() => {setFinder(true)}} 
            className="finderBar">

                <input placeholder="O que você deseja hoje?" />
                <a href="#">
                    <img src={require('../icons/magnifier.png')}></img>
                </a>
                
                <div className={finder ? "inactive" : "active"}>
                    <h3>Sugestões</h3>
                    <ul>
                    
                        <li>Vestido</li>
                        <li>Moletom</li>
                        <li>Vestido</li>
                        <li>Moletom</li>
                        <li>Vestido</li>
                        <li>Moletom</li>
                    </ul>
                </div>
                
                {/* {finder && (
                    <div>
                        <h3>Sugestões</h3>
                        <ul>
                        
                            <li>Vestido</li>
                            <li>Moletom</li>
                            <li>Vestido</li>
                            <li>Moletom</li>
                            <li>Vestido</li>
                            <li>Moletom</li>
                        </ul>
                    </div>
                )}; */}
            </div>
        </header>
    );
}

export default Finder;