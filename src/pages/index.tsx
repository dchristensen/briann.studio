import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Main from "../components/Main"
import RecentEvents from "../components/RecentEvents"
import StudentImageGallery from "../components/StudentImageGallery"
import UpcomingEvents from "../components/UpcomingEvents"

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
      </Header>
      <UpcomingEvents />
      <StudentImageGallery />
      <Main>
        <RecentEvents />
      </Main>
      <Footer />
    </Layout>
  )
}
