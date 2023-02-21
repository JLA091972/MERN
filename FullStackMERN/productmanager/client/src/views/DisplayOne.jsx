import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'


const DisplayOne = () => {

    const { id } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setProducts(response.data.results)
                console.log(response.data.results)
            })
            .catch((err) => {
                console.log("Error encountered: ", err)
            })
    }, [])



    return (
        <div>
            <h3> Product information</h3>
            <div><br/>
               <h5>{products.title}</h5> 
               <h5>${products.price}</h5>
               <h5>{products.description}</h5>
            </div>
        </div>
    )
}

export default DisplayOne