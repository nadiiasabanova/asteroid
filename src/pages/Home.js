import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Asteroid from "../Components/Asteroid";
import {Link} from "react-router-dom";
import AsteroidContext from "../context/AsteroidContext";


function Home() {


    const{near, setNear, keys, setKeys, cart}= useContext(AsteroidContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isKilometers, setIsKilometers] = useState(true);



    useEffect(() => {
        async function makeRequest(){
          const res = await axios.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-07-23&end_date=2024-07-30&api_key=Hv4lxaOK2zBgb7WfABUHxqwkoPGZm9N55ClDhuhM");
            setNear(res.data['near_earth_objects']);
            setKeys(Object.keys(res.data['near_earth_objects']));
            // console.log(res.data['near_earth_objects']);
            setIsLoading(false);
        }
        makeRequest();


    }, []);
    if(isLoading){
        return(
            <h2> Loading....</h2>
        )
    }
    else{
        return (

            <div>
                <h2>Nearest flights</h2>
                <button onClick={()=>setIsKilometers(true)}>Kilometers</button>
                <button onClick={()=>setIsKilometers(false)}>Lunar</button>
                <div>
                    <h2>Cart</h2>
                    <p>{cart.length} asteroids</p>
                    <Link to='/cart'> to cart</Link>
                </div>

                {keys.map((elem)=>{
                return(
                <div>
                    {near[elem].map((item)=> {
                    return(
                        <Asteroid item={item} elem={elem} isKilometers={isKilometers}  />
                    )
                    })}
                </div>)
            })}

            </div>
        );
    }

}

export default Home;