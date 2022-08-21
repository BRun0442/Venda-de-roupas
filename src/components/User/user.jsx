import React from 'react';
import './user.css'

function User()
{
    return(
        <a href="#" className="user">
            <img src={require('../user_v2.png')}></img>
            Entrar
        </a>
    );
}

export default User;