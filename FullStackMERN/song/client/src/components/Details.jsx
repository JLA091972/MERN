import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Details = () => {

    const [song, setSong] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/song/${id}`)
            .then((res) => {
                console.log("Get details:", res.data)
                setSong(res.data)
            })
            .catch(err => console.log("Error found:", err))
    }, [id])

    return (
        <div>
            {
                song ?  //turnery if song is available proceed to below
                <div>
                    <h1>Song Artist: {song.artist}</h1>
                    <h1>Song Title: {song.title}</h1>
                    <h3>Song Rating {song.rating}</h3>
                    <h5>Top50: {song.top50 ? "Yes" : "No"}</h5>
                </div> :  //else display below
                <h1>Song is not available</h1>
            }
            <button className='btn btn-outline-dark'><Link to='/'>Home</Link></button>
        </div>
    )
}

export default Details