import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Species = () => {
    const {id} = useParams();
    const [info, setInfo] = useState ([]);


    useEffect(() =>{
        axios.get(`https://swapi.dev/api/species/${id}`)
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
            <h1>Star Wars Species</h1>
            <h2>Species Name: {info.name}</h2>
            <p>
                Average Height: {info.average_height} <br/>
                Classification: {info.classification} <br/>
                Eye Colors: {info.eye_colors}<br/>
                Language: {info.language}
            </p>

        </div>
    )
}

export default Species