/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
  ],
}
