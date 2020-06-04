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
      <Header />
      <StudentImageGallery />
      <Main>
        <RecentEvents />
      </Main>
      <Footer />
    </Layout>
  )
}
