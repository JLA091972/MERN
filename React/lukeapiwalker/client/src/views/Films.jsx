import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Films = () => {
    const {id} = useParams();
    const [info, setInfo] = useState ([]);


    useEffect(() =>{
        axios.get(`https://swapi.dev/api/films/${id}`)
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
            <h1>Star Wars films</h1>
            <h2>Film Name: {info.title}</h2>
            <h3>Director: {info.director }</h3> 
            <p className='Information' >Movie Summary: {info.opening_crawl}</p>


        </div>
    )
}

export default Films