import React from "react"
import Footer from "./Footer"
import Layout from "./Layout"
import Main from "./Main"
import PageHeader from "./PageHeader"

export interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Layout>
      <PageHeader />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  )
}
