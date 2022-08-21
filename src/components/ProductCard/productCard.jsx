import React from 'react'
import './productCard.css'

function ProductCard(props)
{
    return(
        <section className="productCard">
            <a href={props.link}><img src={props.img} style={{height: props.height}}></img></a>
            <a href={props.link}><p>{props.name}</p></a>
            {/* <p>{props.desc}</p> */}
            <a href={props.link}><h3>R${props.price}</h3></a>
        </section>
    );
}

export default ProductCard;