import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from '../components/Layout'
import slugify from 'slugify'
import SEO from '../components/SEO'
const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    description: { description },
    image,
    servings,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { ingredients, instructions, tools, tags } = content
  return (
    <Layout>
      <SEO title={title} />
      <main className='page'>
        <div className='recipe-page'>
          <section className='recipe-hero'>
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className='about-img'
            ></GatsbyImage>
            <article className='recipe-info'>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className='recipe-icons'>
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{servings} min.</p>
                </article>
              </div>
              <p className='recipe-tags'>
                Tags :
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link key={index} to={`/tags/${slug}`}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className='recipe-content'>
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => (
                <div key={index} className='single-instruction'>
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              ))}
            </article>
            <article className='second-column'>
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className='single-ingredient'>
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className='single-tool'>
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      content {
        ingredients
        instructions
        tools
        tags
      }
      description {
        description
      }
    }
  }
`
export default RecipeTemplate
