import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Planets = () => {
    const { id } = useParams();
    const [info, setInfo] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response);
                setInfo(response.data);
            })
            .catch((err) => {
                console.log("Error encountered pulling information: ", err)
                setErrorMessage('No records found');
            })

    }, [id])

    return (
        <div>
            {errorMessage ? <h1 className="error"> {errorMessage} </h1> :   //turnery, do not remove ":" 
                //if there is errorMessage display the h1
                //else display below
                <div>
                    <h1>Star Wars Planets</h1>
                    <h2>Planet Name: {info.name}</h2>
                    <p>
                        Climate: {info.climate} <br />
                        Terrain: {info.terrain} <br />
                        Population: {info.population}<br />
                        Orbital period: {info.orbital_period}
                    </p>
                </div>
            }

        </div>
    )
}

export default Planets