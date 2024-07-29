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
          <li className="nav-nested">
            <Link to="/about/me">About</Link>
            <ul>
              <li>
                <Link to="/about/me">Ms. BriAnn</Link>
              </li>
              <li>
                <Link to="/about/suzuki">Suzuki Method</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li className="nav-nested">
            <Link to="/studio/faq">Studio</Link>
            <ul>
              <li>
                <Link to="/studio/apply">Apply</Link>
              </li>
              <li>
                <Link to="/studio/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/studio/policies">Policies</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
