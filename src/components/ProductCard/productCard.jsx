import React from 'react'
import './productCard.css'

function ProductCard(props)
{
    return(
        <section className="productCard">
            <img src={props.img}></img>
            <p>{props.name}</p>
            {/* <p>{props.desc}</p> */}
            <h3>R${props.price}</h3>
        </section>
    );
}

export default ProductCard;