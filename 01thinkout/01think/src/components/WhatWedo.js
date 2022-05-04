import React from 'react'
import pitem from '../images/work-process-item-01.png'

export default function WhatWedo() {
    return (
        <>
                        
        <section className="mini" id="work-process">
        <div className="mini-content">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="info">
                            <h1><b>01THINK</b></h1>
                            <p>Welcome to a world where thinkers think for the devolopers <br/>and the developers develop for the thinkers.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <div href="#" className="mini-box">
                            <i><img src={pitem} alt=""/></i>
                            <strong>Think</strong>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <div href="#" className="mini-box">
                        <i><img src={pitem} alt=""/></i>
                        <strong>Tell</strong>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <div href="#" className="mini-box">
                        <i><img src={pitem} alt=""/></i>
                        <strong>Wait</strong>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <div href="#" className="mini-box">
                        <i><img src={pitem} alt=""/></i>
                            <strong>Browse</strong>
                            </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div href="#" className="mini-box">
                            <i><img src={pitem} alt=""/></i>
                            <strong>Get idea</strong>
                            </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="mini-box">
                            <i><img src={pitem} alt=""/></i>
                            <strong>Work!</strong>

                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </section>
        </>
    )
}
