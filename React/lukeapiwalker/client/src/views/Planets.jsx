import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Planets = () => {
    const {id} = useParams();
    const [info, setInfo] = useState ([]);


    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            console.log(response);
            setInfo(response.data);
        })
        .catch((err) => {
            console.log("Error encountered pulling information: ", err)
        })
        
    },[id])
    
    return (
        <div>
            <h1>Star Wars Planets</h1>
            <h2>Planet Name: {info.name}</h2>
            <p>
                Climate: {info.climate} <br/>
                Terrain: {info.terrain} <br/>
                Population: {info.population}<br/>
                Orbital period: {info.orbital_period}
            </p>
        </div>
    )
}

export default Planets