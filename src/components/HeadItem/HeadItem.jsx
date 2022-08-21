import React from 'react';
import './HeadItem.css';
import '../../App.css';

function HeadItem(props)
{
    return(
        <a href="#" className="item">
            <img src={props.img}></img>
            {props.text}
        </a>
    );
}

export default HeadItem;