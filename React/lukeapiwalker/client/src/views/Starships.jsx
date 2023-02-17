import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Starships = () => {
    const {id} = useParams();
    const [info, setInfo] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
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
                    <h1>Star Wars Ships</h1>
                    <h2>Starship Name: {info.name}</h2>
                    <h3>Class : {info.starship_class} <br /></h3>
                    <h4>Model: {info.model}</h4>
                    <p>

                        Manufacturer : {info.manufacturer} <br />
                        Passenger Capacity: {info.passengers} <br />
                        Cargo Capacity: {info.cargo_capacity} <br />
                        Hyperdrive Rrating: {info.hyperdrive_rating}<br />
                        Lenght: {info.length}
                    </p>
                </div>
            }


        </div>
    )
}

export default Starships