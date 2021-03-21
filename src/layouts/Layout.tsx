import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"

interface Props {
}

const Layout: React.FC<Props> = () => {

  return (
    <>
      <div className="main-content">
        <div className="background-psyche">
          <Header />
          <iframe src="https://amazing-bohr-d113f6.netlify.app/" name="psyche"
            style={{ height: "70px", width: "100%" }} />
        </div>
        <div className="MainPage">
          <Router>
            <MainPage path="/" />
            <MainPage path="/pictures" />
            <MainPage path="/room" />
            <MainPage path="/twitter" />
            <MainPage path="/404" />
            <MainPage default />
          </Router>
        </div>
      </div>
    </>
  )
}

export default Layout
