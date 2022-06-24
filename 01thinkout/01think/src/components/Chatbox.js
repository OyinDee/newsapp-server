import {useState,useEffect} from 'react'
import '../App.css'
import axios from 'axios'
import Nav from './Nav2'
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import {changename} from '../actions/change'
// import socketClient from "socket.io-client";

export default function Chatbox({socket}) {

  const token = localStorage.token;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const username= localStorage.username;
  const [allMessages, setAllMessages] = useState([])
  const [senderID, setSenderID] = useState('')
  
  // const endpoint='http://localhost:1111/'
  const [firstMessage, setFirstMessage] = useState('')
  
  const tryToSendMessage=()=>{
    if (newMessage=="") {
      
    }
    else{
      const incoming={
        body: newMessage,
        username: localStorage.username
      }
      socket.current.emit('messageInput', incoming);
      setNewMessage('')
    }

    
  }

  socket.current.on('messageOutput',(incoming) => {
    // console.log(senderID)
    const incomingMessage = {
      ...incoming,
    };
    // console.log(incomingMessage)
    setAllMessages([...allMessages, incomingMessage]);
    // console.log(allMessages)
  });
  const [newMessage, setNewMessage] = useState('')

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
    }
    else{
      console.log("it isnt")
      navigate('/')
        }
}).catch((err)=>{
  console.log(err)
}).then(()=>{

  const username=localStorage.username
  axios.post('https://o1think.herokuapp.com/chat',{username:username}).then(()=>{
    
  })
})

}, [username, dispatch, navigate, token])

const a={borderTop: "4px solid #ffa900"}
const b={backgroundColor:"#eee"}
const c={width: "45px", height: "100%"}
const d={backgroundColor: "#f5f6f7"}
const e={width: "45px", height: "100%"}
return (
  <>
  <Nav/>
        <br/>
        <section style={b}>
        <div className="container py-5">
      
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
      
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center p-3"
                  style={a}>
                  <h5 className="mb-0">Chat messages</h5>
                  <span className="badge bg-dark me-3 text-white">100+</span>
                  <div className="d-flex flex-row align-items-center">
                    <i className="fa-redo"></i>
                    <i className="fa-redo"></i>
                  </div>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative",}}>
      
                <div className="d-flex justify-content-between">
                  <p className="small mb-1">Someone</p>
                  <p className="small mb-1 text-muted">Today</p>
                </div>
                {allMessages.map((allMessages,i)=>{return allMessages.username===localStorage.username?(<div key={i} className="d-flex flex-row justify-content-end mb-4 pt-1"><div><p className="small p-2 me-3 mb-3 text-white rounded-3 bg-dark">{allMessages.body}</p></div></div>):(<div key={i} className="d-flex flex-row justify-content-start"><div><p className="small p-2 ms-3 mb-3 rounded-3" style={d}>{allMessages.body}</p></div></div>);
              })}



                
                </div>
                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3 mt-5 wfgf">
                  <div className="input-group mb-0">
                    <input type="text" className="form-control" placeholder="Type message..."
                      aria-label="Recipient's username" aria-describedby="button-addon2"  onChange={(e)=>{setNewMessage(e.target.value)}} value={newMessage}/>
                    <button className="btn btn-dark" text-whitee="button" id="button-addon2" style={{paddingTop: ".55rem"}} onClick={tryToSendMessage}>
                        Send
                    </button>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
      
        </div>
      </section>
        </>
    )
}
