
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function AdminNav() {
    const opened={width:"250px"}
    const closed={width:"0px"}
    const [style, setStyle] = useState(closed)
    const navigate=useNavigate()
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
        <li><a>Customer support</a></li>
        <li><a>Posts History</a></li>
        <li><a>Feedbacks</a></li>
        <li><a>Add Admin</a></li>        
        <li><a>My Profile</a></li>
        <li><a onClick={tryToLogout}>Logout</a></li>
        
        </ul>
                <div id="mySidebar" className="sidebar" style={style}>
                <a className="closebtn" onClick={closeNav}>&times;</a>
    
                <br/><br/>
              <a onClick={closeNav}>Customer support</a>
              <a onClick={closeNav}>Posts History</a>
              <a onClick={closeNav}>Feedbacks</a>
              <a onClick={closeNav}>Add Admin</a>              
              <a onClick={closeNav}>My Profile</a>
          <a onClick={tryToLogout}>Logout</a>                     
        </div>
        
                </nav>
            </div>

    </header>   
        </>
    )
}
