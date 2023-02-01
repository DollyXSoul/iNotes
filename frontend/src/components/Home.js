import React from "react"
import Notes from "./Notes"


const Home = (props) => {
    const { showAlert } = props;

    return (
        <div className="container">
            <h2 className="my-2 text-center"> Your notes</h2>

            <Notes showAlert={showAlert} />
        </div>

    )
}

export default Home
