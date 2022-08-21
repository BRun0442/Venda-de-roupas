import React from 'react';
import './favorite.css';
import '../../App.css';

function Favorite()
{
    return(
        <a href="#" className="favorite">
            <img src={require('../favorite.png')}></img>
            Favoritos
        </a>
    );
}

export default Favorite;