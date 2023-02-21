import React, { useState, useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const DisplayInfo = () => {
    const [products, setProducts] = useState([]);


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

    return (
        <div>
            <h3>Product Names</h3>
            <ul className='tiled-ul'>
                {products.map((product, id) => {
                    return (
                        <li key={id}>
                            <Link to={`/${product._id}`}>{product.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default DisplayInfo