import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Layout from "./Layout"
import Main from "./Main"
import { PageProps } from "gatsby"

export default function PageLayout(props: PageProps) {
  // check if this is an MDX page
  if (props.pageContext !== undefined && "frontmatter" in props.pageContext) {
    return <DefaultLayout {...props} />
  }

  return <Layout>{props.children}</Layout>
}

export interface DefaultLayoutProps {
  children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  )
}
