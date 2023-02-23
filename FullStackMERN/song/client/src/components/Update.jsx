import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Update = () => {

const [title, setTitle] = useState("")
const [artist, setArtist] = useState("")
const [rating, setRating] = useState(5)
const [top50, setTop50] = useState(true)
const [errors, setErrors] = useState([]); 

const {id} = useParams()
const navigate = useNavigate()

useEffect(() => {
    axios.get(`http://localhost:8000/api/song/${id}`)
        .then((res) => {
            console.log("Get details:", res.data)
            const song = res.data
            setTitle(song.title)
            setArtist(song.artist)
            setRating(song.rating)
            setTop50(song.top50)
        })
        .catch(err => console.log("Error getting details found:", err))
}, [id])

const handleSubmit = (e) =>{
    e.preventDefault()
    const songObj = {title, artist, rating, top50}
    axios.put(`http://127.0.0.1:8000/api/song/${id}`, songObj)
    .then((response) =>{
        console.log(response.data)
        navigate("/")
    })
    .catch(err =>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
})
}

    return (
        <div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Artist</label>
                    <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)}/>
                </div>
                <div>
                    <label>Rating</label>
                    <input type='number' value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <div>
                    <label>Top50</label>
                    <input type='checkbox' checked={top50} onChange={(e) => setTop50(e.target.checked)}/>   
                </div>
                <div>
                    <button type='submit' className='btn btn-outline-dark'>Submit</button>|<button className='btn btn-outline-warning'><Link to='/'>Cancel</Link></button>
                </div>
            </form>

        </div>
    )
}

export default Update