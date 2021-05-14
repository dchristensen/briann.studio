import { graphql, PageProps } from "gatsby"
import Img, { FixedObject, FluidObject } from "gatsby-image"
import React, { useLayoutEffect } from "react"
import PageLayout from "../components/PageLayout"
import YouTubeVideo from "../components/YouTubeVideo"

interface NewsNode {
  id: string
  date: string
  title: string
  photo: { childImageSharp: { fluid: FluidObject; fixed: FixedObject } } | null
  youtube: string | null
}

type NewsQuery = {
  allNewsYaml: {
    edges: {
      node: NewsNode
    }[]
  }
}

export default function News({ data }: PageProps<NewsQuery>) {
  return (
    <PageLayout>
      <div className="news-container">
        {data.allNewsYaml.edges.map(x => (
          <NewsItem key={x.node.id} {...x.node} />
        ))}
      </div>
    </PageLayout>
  )
}

function NewsItem(props: NewsNode) {
  const headlineRef = React.createRef<HTMLDivElement>()
  useLayoutEffect(() => {
    const elem = headlineRef.current
    if (elem !== null && elem.offsetWidth < elem.scrollWidth) {
      elem.title = props.title
    }

    return () => {
      if (elem) {
        elem.title = ""
      }
    }
  }, [props.title])

  return (
    <div className="news-item">
      <div className="news-media">
        {props.photo && (
          <Img fixed={props.photo.childImageSharp.fixed} alt={props.title} />
        )}
        {props.youtube && <YouTubeVideo url={props.youtube} />}
      </div>
      <div>
        <div className="news-headline" ref={headlineRef}>
          {props.title}
        </div>
        <div className="news-date">{props.date}</div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  {
    allNewsYaml(sort: { fields: date, order: DESC }, limit: 10) {
      edges {
        node {
          id
          date(formatString: "MMMM DD, YYYY")
          title
          photo {
            ...image400Fixed
          }
        }
      }
    }
  }
`
