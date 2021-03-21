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
  const [bodyHeight, setBodyHeight] = useState<any>(false)
  const [bodyWidth, setBodyWidth] = useState<any>(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setBodyHeight(document.body.scrollHeight)
      setBodyWidth(document.body.scrollWidth)
    }
  }, []);

  return (
    <>
      <div className="background-psyche">
        {/* <iframe src="https://amazing-bohr-d113f6.netlify.app/" name="psyche" width={bodyWidth} height={bodyHeight} /> */}
      </div>
      <div className="main-content">
        <Header />
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
