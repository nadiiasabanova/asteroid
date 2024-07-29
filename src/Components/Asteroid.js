import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import css from './Asteroid.module.css';
import AsteroidContext from "../context/AsteroidContext";

function Asteroid({item, elem, isKilometers }) {
    const {setCart} = useContext(AsteroidContext);
    let size;
    const [isOrdered, setIsOrdered] = useState(false);

    if(Math.round(item['estimated_diameter']['meters']['estimated_diameter_max'] < 100) ){
    size = '40px';
    }
    else{
        size = '60px';
    }

    const distanceMoon = Math.round(item['close_approach_data'][0]['miss_distance']['lunar']);
    const distanseKilometer =Math.round(item['close_approach_data'][0]['miss_distance']['kilometers']);

    function addToCart(){
        setCart(prev=>prev.concat(item));
        setIsOrdered(true);
    }
    function removeFromCart(){
        setCart(prev=>prev.filter((x) => x['name'] != item['name']));
        setIsOrdered(false);
    }
    return (
        <Link className={css.link} to={`/detail/${item.id}`} >
            <h1>{elem}</h1>
            <p>Name: {item.name}</p>
            <p>Distance: {isKilometers ? distanseKilometer +' km':distanceMoon +' lunar'}</p>
            <p>Diameter: {Math.round(item['estimated_diameter']['meters']['estimated_diameter_max'])} </p>
            <img src='/pngegg.png' style={{width: size}} alt={'asteroid'}/>
            {item['is_potentially_hazardous_asteroid']? <p>Dangerous</p>: null}
            {isOrdered ? <button onClick={removeFromCart}> at cart</button> : <button onClick={addToCart}>Order</button>}

        </Link>
    );
}

export default Asteroid;