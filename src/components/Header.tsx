import React from "react"
import Nav from "./Nav"
import useSiteMetadata from "./SiteMetadata"
import { Link } from "gatsby"

export default function Header() {
  const { title } = useSiteMetadata()
  return (
    <div id="header">
      <div className="container">
        <Nav />
        <div id="banner">
          <div className="container">
            <section>
              <header className="major">
                <h2>BriAnn's Suzuki Studio</h2>
                <span className="byline">
                  <em>
                    &quot;Teaching music is not my main purpose. I want to make
                    good citizens. If children hear fine music from the day of
                    their birth and learn to play it, they develop sensitivity,
                    discipline and endurance. They get a beautiful heart.&quot;
                    -Dr. Suzuki
                  </em>
                </span>
              </header>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
