import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Layout from "./Layout"
import Main from "./Main"

export interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  )
}
