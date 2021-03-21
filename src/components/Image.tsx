import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

type Props = {
  src?: string
  alt: string
}
const Image: React.FC<Props> = ({ src = "", alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(src)
      })

      if (!image) {
        return <p>{src}</p>
      }
      else {
        const imageSizes = image.node.childImageSharp.sizes
        return <Img className="image" sizes={imageSizes}
          alt={alt}
          fixed={{
            width: 300,
            height: 300,
            src: src,
            srcSet: src
          }}></Img>
      }
    }}
  />
)

export default Image