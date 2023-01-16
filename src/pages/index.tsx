import React from "react"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Main from "../components/Main"
import RecentEvents from "../components/RecentEvents"
import StudentImageGallery from "../components/StudentImageGallery"

import flyer from "./2022-Suzuki-Piano-Super-Activity.png"

export default function Index() {
  return (
    <Layout>
      <Header>
        <div id="banner">
          <div className="container">
            <section>
              <header className="major">
                <h2>BriAnn's Suzuki Studio</h2>
                <span className="byline">
                  <em>
                    &quot;It is in our power to educate all the children of the
                    world to become a little better as people, a little
                    happier.&quot; -Dr. Suzuki
                  </em>
                </span>
              </header>
            </section>
          </div>
        </div>
      </Header>
      <Announcement expires={new Date("2023-02-05T00:00:00-06:00")}>
        Join us for Utah Suzuki Piano State Super Activity. There will be music
        classes for students of all ages and abilities, teen leadership and
        performance opportunities, parent collaboration and support, yummy lunch
        and more!
        <br />
        February 4, 2023 - 9:00am - 1:00pm
        <br />
        <a href="https://forms.gle/dfTwRtMUHFuAKqBDA" target="_blank">
          Register
        </a>
        &nbsp;&nbsp;&middot;&nbsp;&nbsp;
        <a href={flyer} target="_blank">
          View the Flyer
        </a>
      </Announcement>
      <StudentImageGallery />
      <Main>
        <RecentEvents />
      </Main>
      <Footer />
    </Layout>
  )
}
