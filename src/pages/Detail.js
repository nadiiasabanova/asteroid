import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Detail({near, keys}) {
    const [stone, setStone] = useState([]);
    const {id} = useParams();

useEffect(() => {
                    // for(let key of keys){
                    //     for(let item of near[key]){
                    //         if(item.id===id){
                    //             setStone(item);
                    //             console.log(stone);
                    //         }
                    //     }
                    //
                    // }
    async function Requist (){
       const answer = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=Hv4lxaOK2zBgb7WfABUHxqwkoPGZm9N55ClDhuhM`);
       console.log(answer.data['close_approach_data']);

       setStone(answer.data['close_approach_data']);
    }
    Requist();

    }, [id]);

    return (
        <table>
            <thead><tr><td>Date & time</td><td>Velocity km/sec</td><td>Distance km</td><td>Orbityng body</td></tr></thead>
            <tbody>

                {stone.map((item) => {

                return (
                    <tr>
                    <td> {item['close_approach_date_full']}</td>
                    <td>{Math.round(item['relative_velocity']['kilometers_per_second'])} </td>
                        <td>{Math.round(item['miss_distance']['kilometers'])}</td>
                        <td>{item['orbiting_body']}</td>
                </tr>
                );

            })}

            </tbody>
        </table>
    );
}

export default Detail;