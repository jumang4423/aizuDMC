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
  const [isRotateJumang, setIsRotateJumang] = useState<Boolean>(false)

  useEffect(() => {
    setTimeout(() => { setIsRotateJumang(true) }, 500);
  }, []);

  return (
    <>

      <Header />
      <div className="MainPage">
        <Router>
          <MainPage path="/" />
          <MainPage path="/projects" />
          <MainPage path="/about" />
          <MainPage path="/backwash" />
          <MainPage path="/404" />
          <MainPage default />
        </Router>
      </div>
    </>
  )
}

export default Layout
