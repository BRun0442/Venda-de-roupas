import React from 'react';
import './finder.css'
import {useState} from 'react';

function Finder()
{
    const [finder, setFinder] = useState(false);

    const updateFinder = () => {
        setFinder(false);
    }
    return(
        <div className="finder" onMouseLeave={updateFinder}>
            <div>
                <input placeholder="O que você deseja hoje?">
                    <ul className="dropDown">
                        <li></li>
                    </ul>
                </input>
                
            </div>
            <img src={require('../magnifier.png')}></img>
        </div>
    );
}

export default Finder;