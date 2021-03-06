import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "statue.jpeg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      className="collageImgs"
    />
  )
}

export default Image
