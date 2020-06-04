import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import StudentImageGallery from "./StudentImageGallery"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

import "../styles/style.css"
import "../styles/style-wide.css"
import "../styles/style-normal.css"
import "../styles/style-narrow.css"
import "../styles/style-narrower.css"
import "../styles/style-mobile.css"
import useSiteMetadata from "./SiteMetadata"

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { title, description } = useSiteMetadata()
  const titlePrefix = title ? title + " - " : ""
  return (
    <>
      <Helmet>
        <title>{titlePrefix}BriAnn Christensen's Suzuki Studio</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <div className="homepage">{children}</div>
    </>
  )
}
