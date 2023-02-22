import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

const EditItem = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [products, setProducts] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setProducts(response.data.results)
                console.log(response.data.results)
                const item = response.data.results
                setTitle(item.title)
                setPrice(item.price)
                setDescription(item.description)
            })
            .catch((err) => {
                console.log("Error encountered: ", err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((response) => {
                navigate('/')
            })
            .catch((err) => {
                console.log("Error encountered: ", err)
            })


    }


    const submitHandler = (e) => {
        e.preventDefault();

        //use axios to put data to postman,with form data
        axios.put(`http://127.0.0.1:8000/api/products/${id}/edit`, { title, price, description })
            .then(resp => {
                console.log("Response:", resp)
                navigate('/')
            })
            .catch(err => console.log("Error:", err))
    }

    return (
        <div>
            <h3> Update Product</h3>
            <form onSubmit={submitHandler} className="formentry">
                <div>
                    <label>Title </label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" />
                </div>
                <div>
                    <label>Price </label>
                    <input type="number" min="1" step="any" value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control" />
                </div>
                <div>
                    <label>Description </label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" />
                </div>
                <br />
                <div>
                    <button type='submit' className='btn btn-outline-dark'>Update</button>
                    <button type="btn " onClick={(e) => handleDelete(products._id)}>Delete</button>
                </div>
            </form>
        </div>

    )
}

export default EditItem