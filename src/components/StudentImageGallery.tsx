import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function StudentImageGallery() {
  const data = useStaticQuery<DataProps>(graphql`
    {
      allFile(
        sort: { fields: modifiedTime, order: DESC }
        filter: { sourceInstanceName: { eq: "images" } }
      ) {
        edges {
          node {
            childImageSharp {
              thumbnail: resize(width: 100) {
                src
                width
                originalName
              }
              fullSize: resize(width: 800) {
                src
                width
                originalName
              }
            }
          }
        }
      }
    }
  `)
  const images: ReactImageGalleryItem[] = data.allFile.edges.map(x => ({
    thumbnail: x.node.childImageSharp.thumbnail.src,
    original: x.node.childImageSharp.fullSize.src,
  }))

  return (
    <div className="wrapper style2">
      <section className="container">
        <div className="row">
          <section className="12u">
            <ImageGallery
              items={images}
              autoPlay={true}
              showFullscreenButton={false}
              slideInterval={5000}
            />
          </section>
        </div>
      </section>
    </div>
  )
}

type ImageProps = {
  src: string
  originalName: string
  width: number
}

type DataProps = {
  allFile: {
    edges: {
      node: {
        childImageSharp: {
          thumbnail: ImageProps
          fullSize: ImageProps
        }
      }
    }[]
  }
}
