// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'


const People = () => {
    const { id } = useParams();
    const [info, setInfo] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
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
                    <h1>Star Wars People</h1>
                    <h2>Name: {info.name}</h2>
                    <p>Birth year: {info.birth_year} <br />
                        Eye Color: {info.eye_color}: <br />
                        Height: {info.height}
                    </p>
                </div>
            }

        </div>
    )
}

export default People