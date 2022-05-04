import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav2() {
    const openNav=()=> {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
}

const closeNav=()=> {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
    return (
        <>
        <header className="header-area header-sticky">

        <div className="row">
        
        <nav className="main-nav">
        <button className="openbtn" onClick={openNav}>&#9776; </button>                    
        <a className="openbtn"></a>
        <ul className="nav">
        <li><Link to='/home'>Newsfeed</Link></li>
        <li><Link to='/home'>Chats</Link></li>
        <li><Link to='/home'>My Lab</Link></li>
        <li><Link to='/home'>My Profile</Link></li>
        <li><a>Logout</a></li>
        
        </ul>
                <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
    
                <br/><br/>
              <Link to='/home' onClick={closeNav}>Newsfeed</Link>
              <Link to='/home' onClick={closeNav}>Chats</Link>
              <Link to='/home' onClick={closeNav}>My Lab</Link>
              <Link to='/home' onClick={closeNav}>My Profile</Link>
          <Link to='/'>Logout</Link>                     
        </div>
        
                </nav>
            </div>

    </header>           
        </>
    )
}
