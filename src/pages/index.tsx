import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Main from "../components/Main"
import RecentEvents from "../components/RecentEvents"
import StudentImageGallery from "../components/StudentImageGallery"

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
      <StudentImageGallery />
      <Main>
        <RecentEvents />
      </Main>
      <Footer />
    </Layout>
  )
}
