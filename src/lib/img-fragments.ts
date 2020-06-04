import { graphql } from "gatsby"

export const images = graphql`
  fragment image400Fluid on File {
    childImageSharp {
      fluid(
        maxWidth: 400
        maxHeight: 400
        traceSVG: { color: "#AAAAAA" }
        quality: 50
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment image400Fixed on File {
    childImageSharp {
      fixed(
        width: 400
        height: 350
        traceSVG: { color: "#AAAAAA" }
        quality: 50
      ) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`
