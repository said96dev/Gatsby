import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className='recipes-list'>
      {recipes.map((recipes, index) => {
        const { title, image, prepTime, cookTime } = recipes
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${slug}`} key={index} className='recipe'>
            <GatsbyImage
              className='recipe-img'
              image={pathToImage}
              alt={title}
            ></GatsbyImage>
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} | Cook : {cookTime}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
