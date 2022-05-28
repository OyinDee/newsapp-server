import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Nav2() {
    const navigate=useNavigate()
    const opened={width:"250px"}
    const closed={width:"0px"}
    const [style, setStyle] = useState(closed)

const openNav=()=>{
    setStyle(opened)
}
const closeNav=()=> {
    setStyle(closed)
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
        <li><a>Newsfeed</a></li>
        <li><a>Chats</a></li>
        <li><a>My Lab</a></li>
        <li><a>My Profile</a></li>
        <li><a onClick={tryToLogout}>Logout</a></li>
        
        </ul>
                <div id="mySidebar" className="sidebar" style={style}>
                <a className="closebtn" onClick={closeNav}>&times;</a>
    
                <br/><br/>
              <a onClick={closeNav}>Newsfeed</a>
              <a onClick={closeNav}>Chats</a>
              <a onClick={closeNav}>My Lab</a>
              <a onClick={closeNav}>My Profile</a>
          <a onClick={tryToLogout}>Logout</a>                     
        </div>
        
                </nav>
            </div>

    </header>           
        </>
    )
}
