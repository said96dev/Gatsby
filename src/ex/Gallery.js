import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" }, ext: { ne: "css" } }) {
      nodes {
        childrenImageSharp {
          gatsbyImageData(
            layout: FIXED
            transformOptions: { grayscale: true }
            placeholder: BLURRED
          )
        }
        name
      }
    }
  }
`

function Gallery() {
  const data = useStaticQuery(query)
  console.log('🚀 ~ file: Gallery.js:24 ~ Gallery ~ data:', data)
  const node = data.allFile.nodes
  return (
    <Wrapper>
      {node.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>

            {/* <GatsbyImage image={item.childrenImageSharp.gatsbyImageData} /> */}
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.div``
