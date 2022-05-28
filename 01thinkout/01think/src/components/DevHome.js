import {useState,useEffect} from 'react'
import img from '../images/jujutsukaisen.jpg'
import DevNav from './DevNav'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import IdeaComponent from './IdeaComponent'
import {changename} from '../actions/change'
import Footer from '../components/Footer'
export default function DevHome() {
    const [posts, setPosts]= useState([])
    const token = localStorage.token;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const username= localStorage.username;
    
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
            axios.post('https://o1think.herokuapp.com/getUserType', {username:response.data.username}).then((response)=>{
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

    return (
        <>
        <DevNav/>
        <div className="devPagePosts"/>
        
        <section className="section colored">
        <section className="profile-feed">
        {posts.map((val, i) => (
            <div key={i}>
              <IdeaComponent date={val.date} time={val.time} username={val.username} ideaDetails={val.postContent} actions={<div className="cardbox-approval">
              <button className="btn btn-outline-success">Colab</button>
              <button className="btn btn-outline-warning">Enquire</button>        
              <button className="btn btn-outline-dark">+ Wishlist</button>
              </div>}/>
            </div>
          ))} 


</section>
    </section>   
    <Footer/>  
        </>
    )
}
