import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const DisplayInfo = () => {
    // const { id } = useParams()
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((response) => {
                setProducts(response.data.results)
                console.log(response.data.results)
            })
            .catch((err) => {
                console.log("Error encountered: ", err)
            })
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${deleteId}`)
            .then((response) => {
                filterList(deleteId)
            })
            .catch((err) => {
                console.log("Error encountered: ", err)
            })
    }

    const filterList = (deleteId) =>{
        const filteredList = products.filter((eachData) => deleteId!==eachData._id)
        setProducts(filteredList)
    }



    return (
        <div>
            <h3>Product Names</h3>
            <ul className='tiled-ul'>
                {products.map((product, id) => {
                    return (
                        <li key={id}>
                            <Link className="displayname" to={`/${product._id}`}>{product.title}</Link><br />
                            <button type='btn'><Link to={`/${product._id}/edit`}/>Edit</button>
                            <button type="btn " onClick={(e) => handleDelete(product._id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default DisplayInfo