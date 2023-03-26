import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'
export default function Home() {
  return (
    <Layout>
      <SEO title='Home' description='this is Home Page' />
      <main className='page'>
        <header className='hero'>
          <StaticImage
            alt='eggs'
            src='../assets/images/main.jpeg'
            className='hero-img'
            placeholder='tracedSVG'
            layout='fullWidth'
          ></StaticImage>
          <div className='hero-container'>
            <div className='hero-text'>
              <h1>Simply Recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
