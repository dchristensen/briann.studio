import React from "react"
import { Link } from "gatsby"
import Bars from "../svg/bars"
import Times from "../svg/times"
import useSiteMetadata from "./SiteMetadata"

export default function Nav() {
  const [open, setOpen] = React.useState(false)
  const { title } = useSiteMetadata()
  return (
    <>
      <div id="nav-toggle">
        <button
          onClick={() => {
            console.log("toggle")
            setOpen(prev => !prev)
          }}
        >
          <Bars />
        </button>
        <span className="title">{title}</span>
      </div>
      <nav id="nav" className={open ? "open" : undefined}>
        <div id="nav-close">
          <button onClick={() => setOpen(false)}>
            <Times />
          </button>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/policies">Policies</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
