import React from "react"
import "./Start.css"
import yellowBlob from "../../assets/blob-5.png"
import blueBlob from "../../assets/blob-6.png"


export default function Start({buttonSelect}) {
  return (
    <div className="main-div">
      <img className="yellow-blob" src={yellowBlob} alt="yellow blob" />
      <img className="blue-blob" src={blueBlob} alt="blue blob" />
      <div className="start-content-container">
        <h1 className="start-title">Quizzical</h1>
        <p className="start-description">Some description if needed</p>
        <button className="start-btn" onClick={buttonSelect}>Start Quiz</button>
      </div>
    </div>
  )
}
