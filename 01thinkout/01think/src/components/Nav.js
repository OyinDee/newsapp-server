import {useState} from 'react'
import {Routes, Route, useNavigate , Router, Link} from "react-router-dom"
import Login from './Login'
export default function Nav() {
    const opened={width:"250px"}
    const closed={width:"0px"}
    const [style, setStyle] = useState(closed)

const openNav=()=>{
    setStyle(opened)
}
const closeNav=()=> {
    setStyle(closed)
}
const navtolog =()=>{
    closeNav()
}

    return (
        <>
        <header className="header-area header-sticky">

            <div className="row">
            
            <nav className="main-nav">
            <button className="openbtn" onClick={openNav}>&#9776; </button>                    
            <a className="openbtn"></a>
            <ul className="nav">
            <li><a href="#welcome" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work-process">What we do</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#signup">Sign up</a></li>
            <li><a onClick={navtolog}><Link to="/login">Login</Link></a></li>
            
            </ul>
                    <div id="mySidebar" className="sidebar" style={style}>
                    <a className="closebtn" onClick={closeNav}>&times;</a>
        
                    <br/><br/>
                  <a href="#welcome" onClick={closeNav} className="active">Home</a>
                 <a href="#work-process" onClick={closeNav}>What we do</a>
                <a href="#about" onClick={closeNav}>Acheivements</a>
            <a href="#contact-us" onClick={closeNav}>Contact Us</a>
              <a href="#signup" onClick={closeNav}>Signup</a>   
              <a onClick={navtolog}><Link to="/login">Login</Link></a>                     
            </div>
                    </nav>
                </div>

        </header>
        </>
    )
}
