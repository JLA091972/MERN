import React, { useState } from 'react'

const Form = () => {
    const [settitle, setTitle] = useState ("")
    const [setprice, setPrice] = useState ("")
    const [setdescription, setDescription] = useState ("")
    const [perosnalInfo, setProductInfo] = useState([]);
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        let personalObj = {settitle, setprice, setdescription}
        setProductInfo([...perosnalInfo, personalObj])


    }
    
    return (
        <div>

            <h1>Product Manager </h1>
            <form onSubmit={submitHandler} className="formentry">
                <div>
                    <label>Title </label> 
                    <input type="text" onChange={(e) => {setTitle(e.target.value)}} className="form-control" />
                    {
                        settitle.length >0  && settitle.length < 2 ? <p className = 'text-danger'> Title should be greater than 2 chars </p> : ''
                    }
                </div>
                <div>
                    <label>Price </label>
                    <input type="number" min="1" step="any" onChange={(e) => {setPrice(e.target.value)}} className="form-control" />
                    {
                        setprice.length >0  && setprice.length < 2 ? <p className = 'text-danger'> Price should be greater than 0</p> : ''
                    }
                </div>
                <div>
                    <label>Description </label>
                    <input type="text" onChange={(e) => {setDescription(e.target.value)}} className="form-control" />
                    {
                        setdescription.length >0  && setdescription.length < 3 ? <p className = 'text-danger'> Description should be greater than 3 chars </p> : ''
                    }
                </div>
                <br />
                <div>
                    <button type='submit' className='btn btn-outline-dark'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form