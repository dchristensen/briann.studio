import React from "react"
import Nav from "./Nav"

export default function Header(props: { children?: React.ReactNode }) {
  return (
    <div id="header">
      <div className="container">
        <Nav />
        {props.children}
      </div>
    </div>
  )
}
