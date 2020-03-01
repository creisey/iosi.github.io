module.exports = {
  siteMetadata: {
    title: 'Thomas Vaeth',
    description: 'My name is Thomas Vaeth. I am front-end developer based in Seattle, Washington. I currently work at Redfin and have previously worked at Urban Influence and Getty Images.',
    url: 'https://thomasvaeth.com',
    image: '/images/me.jpg',
    twitterUsername: '@thomasvaeth',
    social: [
      {
        title: 'GitHub',
        link: 'https://github.com/thomasvaeth',
      },
      {
        title: 'CodePen',
        link: 'http://codepen.io/thomasvaeth',
      },
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/thomasvaeth',
      },
    ],
    projects: [
      {
        title: 'Art by Elina',
        description: 'Website development to showcase Elina Dmitruk\'s oil paintings',
        image: '/art-by-elina-link.gif',
        video: '',
      },
      {
        title: 'The Stable Seattle',
        description: 'Website development for an event space in Seattle',
        image: '/the-stable-seattle-link.jpg',
        video: '',
      },
      {
        title: 'Getty Images',
        description: 'Website redesign for the world\'s best photo library',
        image: '/getty-images-link.jpg',
        video: '',
      },
      {
        title: 'Ink+Volt',
        description: 'Website development for Kate Matsudaira\'s product line of notebooks and planners',
        image: '/ink-volt-link.jpg',
        video: '/ink-volt-link.mp4',
      },
      {
        title: 'S&P Real Estate',
        description: 'Website development for a boutique real estate firm in Vancouver',
        image: '/sp-real-estate-link.jpg',
        video: '',
      },
      {
        title: 'INRIX',
        description: 'Interactive data visualization for a leader in big data analytics',
        image: '/inrix-link.jpg',
        video: '',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/templates/Default.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'thomas.vaeth',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'thomas-vaeth',
        short_name: 'tv',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico',
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
