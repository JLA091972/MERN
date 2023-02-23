import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Display = () => {
    const [songList, setSongList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/songs')
            .then((bucket) => {
                console.log('Bucket contains:', bucket.data)
                setSongList(bucket.data)
            })
            .catch((error) => {
                console.log('Error encountered:', error)

            })
    }, [loaded])

    //handle Delete
    const handleDelete = (e,id) => {
        axios.delete(`http://127.0.0.1:8000/api/song/${id}`)
        .then((response) => {
            console.log("Delete Song :",id)
            setLoaded(!loaded)
        })
        .catch((error) => {
            console.log('Error deleting song encountered:', error)
        })
    }

    return (
        <div>
            <button className='btn btn-outline-dark'><Link to={'/create'}>Add a Song</Link> </button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Rating</th>
                        <th>Top 50</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //store sonList mapping to variable glove
                        songList.map((glove, i) => {
                            return (
                                <tr key={i}>
                                    <td>{glove.title}</td>
                                    <td>{glove.artist}</td>
                                    <td>{glove.rating}</td>
                                    {/* use turnery to determine if top 50 is true or false Condition ? "true":"false" */}
                                    <td>{glove.top50 ? "Yes":"No"}</td>
                                    <td><button className='btn btn-outline-warning'><Link to={`/details/${glove._id}`}>View</Link></button>|
                                        <button className='btn btn-outline-dark'><Link to={`/update/${glove._id}`}>Edit</Link></button>|
                                        <button className='btn btn-danger' onClick={(e) =>{handleDelete(e, glove._id) }}>Delete</button>
                                    </td>

                                </tr>
                            )
                        })

                    }
                </tbody>

            </table>
        </div>
    )
}

export default Display