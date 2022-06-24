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
    const [idea, setIdea] = useState('')
    const [messageforyou, setMessageforyou] = useState('')
    const token = localStorage.token;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const username= localStorage.username;
    const mm= new Date().getMinutes();
    const ss= new Date().getSeconds();
    const hh= new Date().getHours();
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
        <DevNav/>
        <section className="section colored" style={{marginBottom:"-20vh"}}>
        <div className="container" > 
        {messageforyou}
        <div className="yourIdeaCont">
        <form action="" method="post">
        <textarea name="" onChange={(e)=>setIdea(e.target.value)} className="yourIdea" id="" cols="30" rows="10" placeholder="Type in your thoughts, bugs, or announcements, it will be considered and added to the users' feed as soon as we can!" value={idea}>
        </textarea>
        </form>
        <button className="submitIdea btn btn-outline-secondary" onClick={tryToSubmit}>Submit</button>
        </div>
        </div>
        </section>
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
