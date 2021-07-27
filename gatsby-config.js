module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "iotty personal notes",
    description: "Personal of iotty journey",
    twitter: "@iotti0",
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
