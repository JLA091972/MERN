import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState ("")
    const [price, setPrice] = useState ("")
    const [description, setDescription] = useState ("")
    // const [productInfo, setProductInfo] = useState([]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        // let productObj = {title, price, description}
        // setProductInfo([...productInfo, productObj])

        //use axios to post data to postman,with form data
        axios.post('http://127.0.0.1:8000/api/products/new',
        {title, price, description})
        .then(resp =>console.log("Response:", resp))
        .catch(err => console.log("Error:", err))
    }

    return (
        <div>

            <h1>Product Manager </h1>
            <form onSubmit={submitHandler} className="formentry">
                <div>
                    <label>Title </label> 
                    <input type="text" onChange={(e) => {setTitle(e.target.value)}} className="form-control" />
                    {
                        title.length >0  && title.length < 2 ? <p className = 'text-danger'> Title should be greater than 2 chars </p> : ''
                    }
                </div>
                <div>
                    <label>Price </label>
                    <input type="number" min="1" step="any" onChange={(e) => {setPrice(e.target.value)}} className="form-control" />
                    {
                        price.length >0  && price.length < 2 ? <p className = 'text-danger'> Price should be greater than 0</p> : ''
                    }
                </div>
                <div>
                    <label>Description </label>
                    <input type="text" onChange={(e) => {setDescription(e.target.value)}} className="form-control" />
                    {
                        description.length >0  && description.length < 3 ? <p className = 'text-danger'> Description should be greater than 3 chars </p> : ''
                    }
                </div>
                <br />
                <div>
                    <button type='submit' className='btn btn-outline-dark'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Form