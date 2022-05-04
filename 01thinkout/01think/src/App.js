
import './App.css';
import './flex-slider.css'
import './bootstrap.min.css'
import './font-awesome.css'
import './templatemo-softy-pinko.css'
import { trackPromise } from 'react-promise-tracker';
import {useSelector, useDispatch} from "react-redux"
import {Routes, Route, useNavigate , Router, Link} from "react-router-dom"
import axios from 'axios'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Homepage from './components/Homepage'
function App() {
  return (
<>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Homepage/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>

</Routes>
</>
  );
}

export default App;
