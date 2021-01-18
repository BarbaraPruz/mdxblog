module.exports = {
  siteMetadata: {
    title: 'Gatsby MDX Blog',
    description: 'Awesome blog built with Gatsby and MDX',
    titleTemplate: `%s | MDX Blog`,
    url: 'https://mdxblog-gatsby.netlify.app',
    image: 'mainImg.png',
    twitterUsername: '@john_smilga',
  },
  plugins: [
   // `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: pathname =>
          pathname.match(/^\/elevated/) ? `use-credentials` : `anonymous`,
      },
    }
/*     {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    }, */
  ],
}
