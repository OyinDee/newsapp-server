import React from 'react'

export default function All() {
    return (
        <>
        <section className="counter" id="about">
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>0</strong>
                            <span>Ideas</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-top">
                            <strong>0</strong>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>0</strong>
                            <span>Developers</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item">
                            <strong>0</strong>
                            <span>Thinkers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
