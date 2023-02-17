import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const [category, setCategory] = useState("people")
    const [id, setId] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search For: </label>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="species">Species</option>
                </select>
                <label> ID : </label>
                <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Navigation