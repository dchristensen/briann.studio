import React, { useLayoutEffect } from "react"
import { graphql, PageProps } from "gatsby"
import { DefaultLayout } from "../components/PageLayout"
import YouTubeVideo from "../components/YouTubeVideo"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface NewsNode {
  id: string
  date: string
  title: string
  photo: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } | null
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
    <DefaultLayout>
      <div className="news-container">
        {data.allNewsYaml.edges.map(x => (
          <NewsItem key={x.node.id} {...x.node} />
        ))}
      </div>
    </DefaultLayout>
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
          <GatsbyImage
            image={props.photo.childImageSharp.gatsbyImageData}
            alt={props.title}
          />
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
    allNewsYaml(sort: { date: DESC }, limit: 10) {
      edges {
        node {
          id
          date(formatString: "MMMM DD, YYYY")
          title
          photo {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                width: 400
                height: 350
                tracedSVGOptions: { color: "#AAAAAA" }
                quality: 50
              )
            }
          }
        }
      }
    }
  }
`
