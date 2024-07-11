import * as React from "react"
import Header from "./Header/Header"


const Layout = ({ pageTitle,children }) => {


  return (
    <div>
      <Header/>
      {children}

    </div>
  )
}

export default Layout
