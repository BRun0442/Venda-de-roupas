import React from 'react';
import './finder.css'
import {useState} from 'react';


function Finder()
{
    const [finder, setFinder] = useState(false);

    return(
        <div onMouseLeave={() => {setFinder(true)}} className="finder">
            <div onClick={() => {setFinder(false)}} className="finderBar">
                <input placeholder="O que você deseja hoje?" />
                <img src={require('../magnifier.png')}></img>
            </div>

            <div className={finder ? "inactive" : "active"}>
                <h3>Sugestões</h3>
                <ul>
                    <li>Vestido</li>
                    <li>Moletom</li>
                </ul>
            </div>
        </div>
    );
}

export default Finder;