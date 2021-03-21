import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"

interface Props {
}

const Layout: React.FC<Props> = () => {
  // states
  const isSSR: any = typeof window === "undefined"
  // const [bodyHeight, setBodyHeight] = useState<any>(0)
  // const [bodyWidth, setBodyWidth] = useState<any>(0)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setBodyHeight(document.body.scrollHeight)
  //     setBodyWidth(document.body.scrollWidth)
  //   }, 1000)
  // })

  return (
    <>
      <div className="main-content">
        <div className="background-psyche"
        // style={{ height: bodyHeight, width: bodyWidth }}
        >
          <Header />
          <iframe src="https://amazing-bohr-d113f6.netlify.app/" name="psyche" title="psyche"
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
