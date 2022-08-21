import React from 'react';
import './HeadItem.css';
import '../../App.css';

function HeadItem(props)
{
    return(
        <a href="#" className="favorite">
            <img src={props.img}></img>
            {props.text}
        </a>
    );
}

export default HeadItem;