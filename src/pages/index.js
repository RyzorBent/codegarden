import React from "react"
import Preloader from "../components/Preloader/Preloader"
import Timer from "../components/Countdown/Timer"
import Optin from "../components/Optin/Optin"

import '../pages/styles/global.css'

export default function Home() {
    return (
      <div className="App">
        <div className="container">
          <h1>
            Codegarden
            <br />
          </h1>
            <h2>Website Coming Soon</h2>
          <Timer />
          {/* <Optin /> */}
          <Preloader />
        </div>
      </div>
    )
}
