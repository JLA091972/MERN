import React, { useState } from 'react'


const Form = () => {
    const [firstname, setFirstName] = useState ("")
    const [lastname, setLastName] = useState ("")
    const [password, setPassword] = useState ("")
    const [confirmpassword, setConfirmPassword] = useState ("")

    const [perosnalInfo, setPersonalInfo] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()
        
        let personalObj = {firstname, lastname, password, confirmpassword}
        setPersonalInfo([...perosnalInfo, personalObj])


    }
    
    return (
        <div>
            <form onSubmit={submitHandler} className="formentry">
                <div>
                    <label>First Name </label> 
                    <input type="text" onChange={(e) => {setFirstName(e.target.value)}} className="form-control" />
                    {
                        firstname.length >0  && firstname.length < 2 ? <p className = 'text-danger'> First Name should be greater than 2 chars </p> : ''
                    }
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" onChange={(e) => {setLastName(e.target.value)}} className="form-control" />
                    {
                        lastname.length >0  && lastname.length < 2 ? <p className = 'text-danger'> Last Name should be greater than 2 chars </p> : ''
                    }
                </div>
                <div>
                    <label>Password </label>
                    <input type="text" onChange={(e) => {setPassword(e.target.value)}} className="form-control" />
                    {
                        password.length >0  && password.length < 8 ? <p className = 'text-danger'> Last Name should be greater than 8 chars </p> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="text" onChange={(e) => {setConfirmPassword(e.target.value)}} className="form-control" />
                    {
                        confirmpassword != password ? <p className = 'text-danger'> Password does not match </p> : ''
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