import React from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import axios from 'axios'
import {useEffect, useState} from "react"
export default function Signup() {
    const [style, setStyle] = useState("")
    const [stylee, setStylee] = useState("")    
    const navigate = useNavigate()
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const[zeroorone, setzeroorone]= useState(0)
    const[userPart, setUserPart]= useState('')
    const [message, setMessage] = useState('')    
    const [loading, setLoading] = useState(false)              
    const token=localStorage.token
    useEffect(() => {
        axios.get('https://o1think.herokuapp.com/dashcheck', {
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
    ).then((response)=>{
        if(localStorage.token&&response.data.message=='verification successful'){
        navigate('/thinkers/home')
            localStorage.username=response.data.username
        }
        else{
        }
    }).catch((err)=>{
        console.log(err)
    })
    }, [username])
    const tryToSignup=()=>{
        setLoading(true)        
        if(fullname===""||email===""||username===""||password===""||userPart===""){
            setMessage('Something is wrong, a field is empty!')
        setLoading(false)             
        }
        else{
            let userDetails={
                fullname, email,username,password,zeroorone
            }
            axios.post('https://o1think.herokuapp.com/signup', userDetails).then((response) => {
                console.log(response);
                if(response.data.text==="no"){
                setMessage(response.data.message)
                if(response.data.message==="Username already exists."){
                    setUsername('')
                    setStyle("style1");
                    setLoading(false)        
                    
                }
                else if(response.data.message==="Email already exists."){
                    setEmail('')
                    setStylee("style1");                
                    setLoading(false)           
                }
            }
            else if(response.data.text==="yes"){
                navigate('/login')    
                setLoading(false)           
                          
            }
        }).catch((error)=>{
            if (error.message==='timeout exceeded') {
                    setMessage("Check your internet connection and try again.")
            } else {
                setMessage(error.message)       
            }
            setLoading(false)                                             
        });
    }
}
                const unColour=()=>{
                    setStylee("");                
                    setStyle('')      
                }
            const checkUser=()=>{
                if(userPart==="Developer"||userPart==="developer"){
                    setzeroorone(1)
                }
                else if(userPart==="Thinker"||userPart==="thinker"){
                    setzeroorone(0)
                }
                else{
                    setMessage("Make sure your part in this community is spelt correctly!")
                }
            }
    
    return (
        <>
        <section className="section colored" id="signup">
        <div className="container">  
        <div className="row">
        <div className="col-lg-12">
        <div className="center-heading">
        <h2 className="section-title">You can be part of this community</h2>
        </div>
        </div>
        <div className="offset-lg-3 col-lg-6">
        <div className="center-text">
<p></p>
</div>
</div>
</div>

<div className="row">
<div className="col-lg-4 col-md-6 col-sm-12">
<div className="contact-text">
<p>Are you good with codes? You know how well to make the web/app do what you need it to, and you are looking for a mind-blowing errand to send it on?
<br/>You are needed!</p>
<p>Are you a problem-solver? You have filled a gap in your mind but you need an implementation?<br/> You are needed!</p>
</div>
</div>
<div className="col-lg-8 col-md-6 col-sm-12">
<div className="contact-form">
<div className="contact-text" style={{textAlign:"center"}}>{message}</div>

<form id="signupform" action="" name="signupform" method="post">
<div className="row">
<div className="col-lg-6 col-md-12 col-sm-12">
<fieldset>
<input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
</fieldset>
</div>
<div className="col-lg-6 col-md-12 col-sm-12">
<fieldset>
<input name="email" type="email" className="form-control" id="email" className={stylee} placeholder="E-Mail Address" required="" value={email} onChange={(e)=>setEmail(e.target.value)} onFocus={unColour}/>
</fieldset>
</div>
    <div className="col-lg-6 col-md-12 col-sm-12">
    <fieldset>
    <input name="username" type="username" className="form-control" className={style} id="username" placeholder="Your Username" required="" value={username} onChange={(e)=>setUsername(e.target.value)} onFocus={unColour}/>
    </fieldset>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
    <fieldset>
    <input name="password" type="password" className="form-control" id="password" placeholder="Your Password" required="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </fieldset>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
    <fieldset>
    <input name="category" type="text" className="form-control" id="category" placeholder="Developer or Thinker" required="" value={userPart} onChange={(e)=>setUserPart(e.target.value)} onBlur={checkUser}/>
</fieldset>
</div>
</div>
</form>
<div className="col-lg-6 col-md-12 col-sm-12">
<div className="loadingornot">
<fieldset>

{loading ? (
    <div className="rotateBall"></div>
) : (
    <button id="form-submit" className="main-button" onClick={tryToSignup}>Get started</button>
)}
</fieldset>
</div>
<fieldset>
<div className="main-text-space"><Link to='/login' className="theCenter">Log in instead</Link></div>
</fieldset>
</div>
</div>
</div>
</div>
</div>

</section>

        </>
    )
}
