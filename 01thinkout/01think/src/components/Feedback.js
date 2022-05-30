import {useState} from 'react'
import axios from 'axios'
export default function Feedback() {
    const [email,setEmail] = useState('')
    const [fullname,setFullname] = useState('')
    const [feedback,setFeedback] = useState('')    
    const [message,setMessage] = useState('..')    
    const [row,setRow]=useState(false)
    const style1={
        textAlign: "center", color: "grey"
    }     
    const style2={
        textAlign: "center", color: "red"
    } 
    const sendFeedback=()=>{
        if(email===''||fullname===''||feedback===''){
            setMessage("We found something empty!")
            setRow(true)
        }
        else{
            setRow(false)
            axios.post('http://o1think.herokuapp.com/feedback', {email: email,fullname:fullname,feedback:feedback}).then( 
                    setEmail(''),
                    setFeedback(''),
                    setFullname(''),
                    setMessage("Received! We really appreciate that we are building this community together!")
            )
        }
    }
    return (
        <>
        <section className="section colored" id="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Talk To Us</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>... Anything you feel is wrong, and of course, you can say "thanks" for what we have been doing right.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="margin-bottom-30">Keep in touch</h5>
                    <div className="contact-text">
                        <p>Without you, we bet we can't be here,
                        <br/>so, to serve you more....</p>
                        <p>Tell us all you feel: <br/> Suggestions, feedback, report a bug and we would like to hear testimonies too!</p>
                    </div>
                   <div style={row?(style2):(style1)}>
                   {message}
                   </div>
                </div>

                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="contact-form">
                        <form id="contact" action="" method="get">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" onChange={(e)=>{setFullname(e.target.value)}}value={fullname}/>
                              </fieldset>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" onChange={(e)=>{setFeedback(e.target.value)}} value={feedback}></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                            </div>
                            </div>
                            </form>
                            <fieldset>
                              <button id="form-submit" className="main-buttonnn" onClick={sendFeedback}>Send Message</button>
                            </fieldset>
                    </div>
                </div>

            </div>
        </div>
    </section> 
        </>
    )
}
