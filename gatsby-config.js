module.exports = {
  siteMetadata: {
    title: `Dor Lasri`,
    description: `Student, Developer, Creator`,
    author: `@dorlasri`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/assets/docs`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: "content",
    //     path: `${__dirname}/src/content`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dor Lasri's Website`,
        short_name: `Dor Lasri`,
        start_url: `/`,
        background_color: `#555555`,
        theme_color: `#4d4d4d`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-client-side-redirect`,
  ],
};
