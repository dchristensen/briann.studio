import React from "react"
import { Link } from "gatsby"
import YouTubeIcon from "../svg/youtube"
import InstagramIcon from "../svg/instagram"

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="8u">
            <section>
              <ul className="default">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/me">About</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/studio/faq">Studio</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="4u">
            <section>
              <ul className="contact">
                <li>
                  <span className="mail">Mail</span>
                  <span>
                    <a href="mailto:briann@heavyd.net">briann@heavyd.net</a>
                  </span>
                </li>
                <li></li>
              </ul>
              <ul className="icons">
                <li className="icon">
                  <a
                    href="https://www.youtube.com/channel/UCKdAFR-0CHW4rmSrTGT7rlQ"
                    title="YouTube"
                  >
                    <YouTubeIcon />
                  </a>
                </li>
                <li className="icon">
                  <a
                    href="https://www.instagram.com/briannsuzukistudio/"
                    title="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
