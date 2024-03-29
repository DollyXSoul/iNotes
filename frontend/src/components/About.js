import React from 'react'
import dev from '../utils/Developer.gif'

const About = () => {

    return (
        <div className="d-flex flex-column mb-1 container-fluid text-center" style={{ marginTop: "-8vh" }}>

            <div className="p-2 d-flex justify-content-start align-items-center" style={{ height: "10vh" }}>
                <h3 className="d-inline display-6" style={{ textAlign: "left" }} >Source Code  <a href="https://github.com/Dolly-chauhan12/iNotes" target="_blank" rel="noreferrer" style={{ marginTop: "2.5rem", color: "black" }}><i className="fa-brands fa-square-github"></i></a></h3>


                <a href="https://drive.google.com/file/d/1E8lJi5DVDg07Gbejc9LbQz8tiBl_jpk5/view?usp=share_link" className="btn btn-dark active mx-2 mb-1" role="button" aria-pressed="true" target="_blank" rel="noreferrer">Video Demo</a>

            </div>

            <div className="row p-2 m-1" style={{ height: "70vh" }}>

                <div className="col-sm-12 col-md-6 d-grid align-content-center">

                    <div className="card border-dark  mb-lg-0">
                        <div className="card-header">Connect with the devloper</div>
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush rounded-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fas fa-globe fa-lg text-warning"></i>
                                    <p className="mb-0">Coming Soon</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                    <p className="mb-0">Dolly-chauhan12</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-linkedin fa-lg" style={{ color: "#55acee" }}></i>
                                    <p className="mb-0">@12dolly-chauhan</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="col-sm-6 px-0 d-none d-sm-block ">
                    <img src={dev} alt="Devloper" style={{ height: "70vh", objectPosition: "right", width: "80%", marginLeft: "1.5rem" }} />
                </div>


            </div>
            <footer className="mt-3 pt-3" style={{ height: "8vh", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright Dolly Chauhan
            </footer>
        </div>
    )
}

export default About;

