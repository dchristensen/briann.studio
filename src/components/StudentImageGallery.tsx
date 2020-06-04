import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function StudentImageGallery() {
  const data = useStaticQuery<DataProps>(graphql`
    query {
      allImageSharp(sort: { fields: id }) {
        edges {
          node {
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
  `)
  const images: ReactImageGalleryItem[] = data.allImageSharp.edges.map(x => ({
    thumbnail: x.node.thumbnail.src,
    original: x.node.fullSize.src,
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
  allImageSharp: {
    edges: {
      node: {
        thumbnail: ImageProps
        fullSize: ImageProps
      }
    }[]
  }
}
