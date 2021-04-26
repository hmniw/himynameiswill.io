/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
      title: `Will Herring`,
      description: `Will Herring`,
      author: `Will Herring`
  },

  plugins: [
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'files',
              path: `${__dirname}/src/markdown`
          }
      },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `himynameiswill.io`,
              short_name: `Will H`,
              start_url: `/`,
              background_color: `#000`,
              theme_color: `#00FFFF`,
              display: `standalone`,
              icon: `src/images/favicon/favicon__512x512.png`
          },
      },
      {
          resolve: `gatsby-plugin-styled-components`,
          options: {}
      },
      'gatsby-plugin-sass',
      'gatsby-plugin-svgr',
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`
  ],
};
