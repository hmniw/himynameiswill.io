/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
      title: `Will Herring`
  },

  plugins: [
      {
          resolve: `gatsby-plugin-prefetch-google-fonts`,
          options: {
              fonts: [
                  {
                      family: `Open Sans`,
                      variants: [`200`, `400`, `700`]
                  },
                  {
                      family: `Krona One`,
                      variants: `400`
                  }
              ]
          }
      },
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
              start_url: `https://himynameiswill.io`,
              background_color: `#000`,
              theme_color: `#00FFFF`,
              display: `standalone`,
              icon: `${__dirname}/src/images/favicon/favicon__512x512.png`
          },
      },
      'gatsby-plugin-sass',
      'gatsby-plugin-svgr',
      `gatsby-transformer-remark`,
  ],
};
