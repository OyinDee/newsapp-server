import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function DevNav() {
    const navigate= useNavigate()
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
const tryToLogout=()=>{
    const logoutt= window.confirm("You will be logged out!")
         if(logoutt){
             localStorage.removeItem('username')
             localStorage.removeItem('token')
             navigate('/')
         }
         else{
             alert("Welcome back!")
         }
     
 }
    return (
        <>
        <header className="header-area header-sticky spaceBeforeAnything">

        <div className="row">
        
        <nav className="main-nav">
        <button className="openbtn" onClick={openNav}>&#9776; </button>                    
        <a className="openbtn"></a>
        <ul className="nav">
        <li><a>My Opened Projects</a></li>
        <li><a>Wish List</a></li>
        <li><a>Help From Others</a></li>
        <li><a>Chats</a></li>        
        <li><a>My Profile</a></li>
        <li><a onClick={tryToLogout}>Logout</a></li>
        
        </ul>
                <div id="mySidebar" className="sidebar" style={style}>
                <a className="closebtn" onClick={closeNav}>&times;</a>
    
                <br/><br/>
              <a onClick={closeNav}>My Opened Projects</a>
              <a onClick={closeNav}>Wish List</a>
              <a onClick={closeNav}>Help From Others</a>
              <a onClick={closeNav}>Chats</a>              
              <a onClick={closeNav}>My Profile</a>
          <a onClick={tryToLogout}>Logout</a>                     
        </div>
        
                </nav>
            </div>

    </header>   
        </>
    )
}
