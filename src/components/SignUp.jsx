import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const[input,setInput]=new useState(
        {
            "name":"",
            "phone":"",
            "email":"",
            "password":"",
            "cnfpass":""
    }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        if (input.password==input.cnfpass) {
            console.log(input)
            let newInput={"name":input.name,
            "phone":input.phone,
            "email":input.email,
            "password":input.password,
            "cnfpass":input.cnfpass}
            axios.post("http://localhost:3030/SignUp",newInput).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status== "success"
) { alert("Registration Succefully")
                        
                    } else {
                        alert("Email-Id already exist")
                    }

                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
        } else {
            alert("passwrod and confirm passwrod doesn't match")
        }
    }
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Phone Number</label>
            <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Email-Id</label>
            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readvalue}>Register</button>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={readvalue}>Back to Login</button>
            </div>
        </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default SignUp