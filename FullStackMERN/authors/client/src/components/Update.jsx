import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Update = () => {

  const [author, setAuthor] = useState("")
  const [errors, setErrors] = useState([]);

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        // console.log("Get details:", res.data)
        const author = res.data
        setAuthor(author.author)
        // console.log("this is my author:", author)
      })
      .catch(err => console.log("Error getting details found:", err))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    // (author.length < 3) ? console.log("should be error") 
    axios.put(`http://127.0.0.1:8000/api/author/${id}`, { author })
      .then((response) => {
        console.log(response.data)
        navigate("/")
      })
      .catch(err => {
        console.log("This is my handleSubmit :", author)
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
      {
        (author || (author==="")) ?
          <div>
            <button className='btn btn-outline-warning'><Link to='/'>Home</Link></button> <br /><br />
            <p>Edit this Author</p>

            <form className="table" onSubmit={handleSubmit}>
              <div>
                <label>Name:</label> <br /><br />
                <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
              </div>
              <div>
                <br /><button type='submit' className='btn btn-outline-danger'>Submit</button>
              </div>
            </form>
          </div>
          : <h1> Not found</h1>

      }

    </div >
  )
}


export default Update