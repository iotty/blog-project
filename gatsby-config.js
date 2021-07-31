module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "Rihot Gusron",
    description: "A passionate millenial who love to hear your story about logistics, design, and photography.",
    twitter: "iotti0",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/essay`,
        name: `essay`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rihot Gusron Personal Notes`,
        short_name: `Rihot Gusron`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
  }
