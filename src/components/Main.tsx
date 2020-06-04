import React from "react"
import { PageProps } from "gatsby"

export interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <div id="main" className="wrapper style1">
      <section className="container">{children}</section>
    </div>
  )
}
