import React from "react"
import { Link } from "react-router-dom";
import "../App.css"
import logo from "../utils/notes.png";
import logo2 from "../utils/iNotes_Logo.png";

const Welcome = (props) => {


    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 text-center">

                <div className="col " style={{ height: "90vh" }}>
                    <h2 className="display-2"> iNotebook</h2>
                    <p className="display-6 typewriter"> Take Notes <br />store pointers  <br />tag your notes <br />or <p >something to remember!!! </p></p>
                    <img src={logo} className="img-fluid " style={{ maxHeight: "45%", marginTop: "-20px" }} alt="notes" />
                </div>



                <div className="col text-center" style={{ backgroundColor: "#dcdcdc", height: "90vh" }}>
                    <div className="d-flex flex-column justify-content-start" style={{ height: "inherit" }} >
                        <div>
                            <h4 className="display-6"> Get started with iNotebook</h4>
                            <img src={logo2} style={{ maxHeight: "30%" }} alt="logo" />
                        </div>

                        <div className="my-2">
                            <Link className="btn btn-dark btn-rounded my-2" role="button" aria-pressed="true" to="/login" style={{ display: "block", fontSize: "1.5rem", padding: "5px 60px", borderRadius: "50rem" }}>Login</Link>
                            <span className="fs-4" >New to iNotes? <Link to="/signin" type="button" className="btn btn-outline-dark fs-5" style={{ borderColor: "transparent" }}>Join Now!</Link></span>

                        </div>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Welcome;
//<h2 className="my-2 text-center"> Your notes</h2>
 //<Notes showAlert={showAlert} />