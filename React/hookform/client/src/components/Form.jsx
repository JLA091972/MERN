import React, { useState } from 'react'


const Form = () => {
    const [firstname, setFirstName] = useState ("")
    const [lastname, setLastName] = useState ("")
    const [password, setPassword] = useState ("")
    const [confirmpassword, setConfirmPassword] = useState ("")
    
    return (
        <div>
            <form className='formentry'>
                <div>
                    <label>First Name </label> 
                    <input type="text" onChange={(e) => {setFirstName(e.target.value)}} className="form-control" />
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" onChange={(e) => {setLastName(e.target.value)}} className="form-control" />
                </div>
                <div>
                    <label>Password </label>
                    <input type="text" onChange={(e) => {setPassword(e.target.value)}} className="form-control" />
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="text" onChange={(e) => {setConfirmPassword(e.target.value)}} className="form-control" />
                </div>
            </form>
            <br /><br />
            <h3>Your Form Data</h3>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>


            
        </div>
    )
}

export default Form