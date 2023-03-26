import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { graphql, useStaticQuery } from 'gatsby'
const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        cookTime
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
        prepTime
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <section
      className='
    recipes-container'
    >
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
