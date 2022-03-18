import React from "react"
import Preloader from "../components/Preloader/Preloader"
import Timer from "../components/Countdown/Timer"
import Optin from "../components/Optin/Optin"
import logo from "../images/codegarden-logo.png"


import '../pages/styles/global.css'

export default function Home() {
    return (
      <div className="App">
        <div className="container">
          <h1>
            <img
              src={logo}
              class="img-fluid"
              alt="..."
              style={{ maxWidth:'40%'}}
            ></img>
            <br />
          </h1>
          <h2>loading ...</h2>
          <Timer />
          {/* <Optin /> */}
          <Preloader />
        </div>
      </div>
    )
}
