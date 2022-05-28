
import './App.css';
import './flex-slider.css'
import './bootstrap.min.css'
import './font-awesome.css'
import './templatemo-softy-pinko.css'
import { trackPromise } from 'react-promise-tracker';
import {useSelector, useDispatch} from "react-redux"
import {Routes, Route, useNavigate , Router, Link} from "react-router-dom"
import axios from 'axios'
import  {useEffect} from 'react'
import Home from './components/Home'
import Chat from './components/Chatbox'
import Signup from './components/Signup'
import Login from './components/Login'
import IdeaContainer from './components/IdeaComponent'
import Homepage from './components/Homepage'
import TBA from './components/ToBeApproved'
import DevHome from './components/DevHome'
function App() {
  useEffect(() => {
    axios.get('https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700,900', (response)=>{
      console.log(response)
    })
  }, [])
  const dispatch = useDispatch()
  return (
<>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/thinkers/home" element={<Homepage/>}/>
<Route path="/developers/home" element={<DevHome/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/onlyadmin/*" element={<TBA/>}/>
<Route path="/chat" element={<Chat/>}/>

</Routes>
</>
  );
}

export default App;
