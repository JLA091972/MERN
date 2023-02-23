import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Display = () => {
    const [authorList, setAuthorList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/authors')
            .then((response) => {
                // console.log('Info from DB:', response.data)
                response.data.sort(function (a, b) {
                    let authorNameA = a.author.toLowerCase()
                    let authorNameB = b.author.toLowerCase()
                    if (authorNameA > authorNameB) {
                        return 1
                    } else {
                        return -1
                    }
                })
                setAuthorList(response.data)
            })
            .catch((error) => {
                console.log('Error encountered:', error)
            })
    }, [loaded])

    //handle Delete
    const handleDelete = (e, id) => {
        axios.delete(`http://127.0.0.1:8000/api/author/${id}`)
            .then((response) => {
                console.log("Delete Author :", id)
                setLoaded(!loaded)
            })
            .catch((error) => {
                console.log('Error deleting author encountered:', error)
            })
    }

    return (
        <div>
            <button className='btn btn-outline-dark'><Link to={'/create'}>Add New Author</Link> </button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //store sonList mapping to variable listitems
                        authorList.map((listitems, i) => {
                            return (
                                <tr key={i}>
                                    <td>{listitems.author}</td>
                                    <td>
                                        <button className='btn btn-outline-dark'><Link to={`/update/${listitems._id}`}>Edit</Link></button>|
                                        <button className='btn btn-danger' onClick={(e) => { handleDelete(e, listitems._id) }}>Delete</button>
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