/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ecs-ga-library-v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  
  plugins: [
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};