import React from "react"
import ReactDOM from "react-dom"



function Card(){
    return(
        <div className="wrapper">
        <img src="image.jpeg"/>
        <h1>Alina Mubarak Ali</h1>
        </div>
    )
}

ReactDOM.render(< App />, document.getElementById("root"))