import React from 'react'
import fitem from '../images/featured-item-01.png'
import pitem from '../images/work-process-item-01.png'
export default function AfterNav() {
    return (
        <>
        <div className="welcome-area" id="welcome">
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h2>From our stack of ideas <strong>get an headstart to your invention</strong><br/><br/><strong>Or bring out your mindblowing idea!</strong></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="section home-feature">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src={fitem} alt=""/></i>
                                </div>
                                <h5 className="features-title">FOR DEVELOPERS</h5>
                                <p>Check through the royal ideas from the <strong>thinkers</strong> as we see you work with them to acheive greatness.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src={fitem}alt=""/></i>
                                </div>
                                <h5 className="features-title">FOR THINKERS</h5>
                                <p>Let us see you drop down ideas for those who can bring it to reality. Work hand in hands with the <strong>developers</strong>.</p>
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
