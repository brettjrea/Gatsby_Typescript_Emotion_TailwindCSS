/** * Configure your Gatsby site with this file. 
* * See: https://www.gatsbyjs.org/docs/gatsby-config/ */

plugins: [
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`article`, `user`],
      //If using single types place them in this array.
      singleTypes: [`home-page`, `contact`],
      // Possibility to login with a strapi user, when content types are not publically available (optional).
      loginData: {
        identifier: "",
        password: "",
      },
    },
  },
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`
]


  
