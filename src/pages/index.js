import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
export default function Home() {
  return (
    <Layout>
      <main className='page'>
        <header className='hero'>
          <StaticImage
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
      </main>
    </Layout>
  )
}
