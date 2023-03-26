/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'GatsbyJS',
    description: 'This is a sample Gatsby site.',
    author: 'Matt',
    person: {
      name: 'Matt',
      age: 32,
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'Matt', age: 32 },
      { name: 'Larry', age: 42 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `txj9waor5u3y`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400'],
            },
            {
              family: 'Inconsolata',
              variants: ['400', '500', '600', '700'],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
