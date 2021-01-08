module.exports = {
  siteMetadata: {
    title: `Cytroy Uni Blog`,
    name: `Cytroy Uni Blog`,
    siteUrl: `https://cytroy.ga`,
    description: `Official Blog for the University of Cytroy`,
    hero: {
      heading: `Welcome to The University of Cytroy's Blog!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/cytroy`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.svg`,
      },
    },
     {
       resolve: `gatsby-plugin-netlify-cms`,
       options: {},
     },
  ],
};
