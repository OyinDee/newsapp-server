import React from 'react'
import Nav2 from './Nav2'
import Footer2 from './Footer2'
import Footer from './Footer'
import {Routes, Route, useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import {changename} from '../actions/change'
import {useSelector,useDispatch} from "react-redux"     
import axios from 'axios'
import IdeaComponent from './IdeaComponent'
import {useEffect, useState} from "react"
import img from '../images/jujutsukaisen.jpg'

export default function Homepage() {
    const token = localStorage.token;
    const navigate = useNavigate()
    const username= localStorage.username;   
    const [idea, setIdea] = useState('')
    const [messageforyou, setMessageforyou] = useState('')
    const [posts, setPosts] = useState([])    
    
    const mm= new Date().getMinutes();
    const ss= new Date().getSeconds();
    const hh= new Date().getHours();
    const dispatch=useDispatch()
    const time= `${hh}:${mm}:${ss}`
    const date=new Date().getDate(); 
    const month=new Date().getMonth();   
    const year=new Date().getFullYear();   
    const fullDate=(`${date}/${month+1}/${year}`)
    
    useEffect(() => {
        axios.get('https://o1think.herokuapp.com/dashcheck', {
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
    ).then((response)=>{
        if(localStorage.token&&response.data.message==='verification successful'){
                console.log(response)
            localStorage.username=response.data.username                         
                axios.post('https://o1think.herokuapp.com/getUserType', {username: response.data.username}).then((response)=>{
                    console.log(response.data)
                    if(response.data===1){
                        navigate('/developers/home') 
                    }
                    else if(response.data===0){
                        navigate('/thinkers/home') 
                    }    
                    else if(response.data===11){
                        navigate('/onlyadmin')                 
                    }
                })
            }
        else{
        console.log("it isnt")
            navigate('/')
        }
    }).catch((err)=>{
        console.log(err)
    }).then(()=>{
        axios.get('https://o1think.herokuapp.com/userscheck').then((response)=>{
            setPosts(response.data)
        })
    })

    }, [username, dispatch, navigate, token])
    const ideadetail={
        idea,time,username,fullDate
    }
    const tryToSubmit=()=>{
        if(idea===''){
        setMessageforyou(`Blank, isn't it?`)            
        }
        else{
            axios.post('https://o1think.herokuapp.com/adminapproval', ideadetail).then((response)=>{
                console.log(response)
            })
            setIdea('')
            setMessageforyou('Received, Thank you!')

        }
    }
    return (
        <>

            <Nav2/>
    <section className="section colored">
        <div className="container"> 
            {messageforyou}
            <div className="yourIdeaCont">
            <form action="" method="post">
        <textarea name="" onChange={(e)=>setIdea(e.target.value)} className="yourIdea" id="" cols="30" rows="10" placeholder="Type in your thoughts, it will be considered and added to the users' feed as soon as we can!" value={idea}>
        </textarea>
        </form>
        <button className="submitIdea btn btn-outline-secondary" onClick={tryToSubmit}>Submit your idea</button>
        </div>
    </div>
    {posts.map((val, i) => (
        <div key={i}>
          <IdeaComponent date={val.date} time={val.time} username={val.username} ideaDetails={val.postContent} actions={<><div className="cardbox-base">
          <ul className="float-right">
              <li><a><i className="fa fa-comments"></i></a></li>
              <li><a><em className="mr-5">46</em></a></li>
              <li><a><i className="fa fa-share-alt"></i></a></li>
              <li><a><em className="mr-3">05</em></a></li>
          </ul>
          <ul>
              <li><a><i className="fa fa-thumbs-up"></i></a></li>
              <li><a><span>1.1k Supports</span></a></li>
          </ul>
      </div>
      <div className="cardbox-comments">
          <span className="comment-avatar float-left">
              <a href=""><img className="rounded-circle" src={img} alt="..."/></a>
          </span> 
          <div className="search">
              <input placeholder="Write a comment" type="text"/>
              <button><i className="fa fa-camera"></i></button>
          </div>
      </div>
    </>}
      />
        </div>
      ))} 
    </section>
            <Footer2/>
        </>
    )
}
