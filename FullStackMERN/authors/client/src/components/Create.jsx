import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {

  const [author, setAuthor] = useState("")
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://127.0.0.1:8000/api/author/new", {author})
      .then((response) => {
        console.log("Info:", response)
        console.log("This is my handleSubmit :", author)
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
    <div >

      {errors.map((err, index) => <p key={index}>{err}</p>)}
      <p>Add Author</p>
      <form onSubmit={handleSubmit}>
        <div className="table" >
          <label>Author Name</label><br/>
          <input type='text' onChange={(e) => setAuthor(e.target.value)} />
        <p>
          <br/><button type='submit' className='btn btn-outline-dark'>Submit</button><button className='btn btn-outline-warning'><Link to='/'>Cancel</Link></button>
          </p>
        </div>
      </form>



    </div>
  )
}

export default Create