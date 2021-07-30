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
    `gatsby-plugin-postcss`,],
};
