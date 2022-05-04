import React from 'react'
import Footer2 from './Footer2'
import Nav2 from './Nav2'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')    
    const tryToLogin=()=>{
        if(username==''||password==''){
            setMessage("Do make sure you fill neccessary fields and try again")
        }
        else{
            const  userDetails={
                username, password
            }
            axios.post('https://ohonethink.herokuapp.com/login', userDetails).then((response) => {
                localStorage.removeItem('token')               
                console.log(response);
                setMessage(response.data.message)
                if(response.data.message=="Your login is successful!"){
                    localStorage.token=response.data.token
                    navigate('/home')
                }
            })
        }
    }
    const navigate = useNavigate()
    return (
        <>
            <section className="section colored" id="signup">
            <div className="container">  
            <div className="row">
            <div className="col-lg-12">
            <div className="center-heading">
            <h2 className="section-title">Welcome back <br/> Log In to continue.</h2>
            <h6 className="section-title-small">{message}</h6>            
            <h2 className="section-title">Or <Link to="/">Signup</Link></h2>
            </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
    <p></p>
    </div>
    </div>
    </div>
    
    <div className="row">

    <div className="col-lg-12 col-md-6 col-sm-12">
    <div className="contact-form">
    <form id="signupform" action="" name="signupform" method="post">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
        <fieldset>
        <input name="username" type="username" className="form-control" id="username" placeholder="Your Username" required="" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </fieldset>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <fieldset>
        <input name="password" type="password" className="form-control" id="password" placeholder="Your Password" required="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </fieldset>
        </div>
    </div>
    </form>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <fieldset>
    <button id="form-submit" className="main-buttonn" onClick={tryToLogin}>Get started</button>
    </fieldset>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </section>
            <Footer/>
        </>
    )
}
