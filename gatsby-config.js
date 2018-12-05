require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Iyengar Yoga - Gabi Göller'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Hind:300,400,700`]
      }
    }
  ]
};
