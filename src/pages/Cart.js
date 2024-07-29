import React from 'react';

function Cart({cart}) {

    return (

        <div>
            {cart.map(item=>{
                return(
                    <div>
                        <h2>Name: {item.name}</h2>
                        <p>Diameter: {Math.round(item['estimated_diameter']['meters']['estimated_diameter_max'])} </p>
                        {item['is_potentially_hazardous_asteroid'] ? <p>Dangerous</p> : null}
                    </div>)
                }
            )

            }
            {/*<h1>{elem}</h1>*/}
            {/*<p>Name: {item.name}</p>*/}
            {/*<p>Distance: {isKilometers ? distanseKilometer + ' km' : distanceMoon + ' lunar'}</p>*/}
            {/*<p>Diameter: {Math.round(item['estimated_diameter']['meters']['estimated_diameter_max'])} </p>*/}
            {/*<img src='/pngegg.png' style={{width: size}} alt={'asteroid'}/>*/}
            {/*{item['is_potentially_hazardous_asteroid'] ? <p>Dangerous</p> : null}*/}
            {/*<button onClick={addToCart}>Order</button>*/}
        </div>
    );
}

export default Cart;