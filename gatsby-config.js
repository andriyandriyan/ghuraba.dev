module.exports = {
  siteMetadata: {
    title: `Devghuraba Teknologi`,
    description: `Jasa Pembuatan Website, Aplikasi Android & Aplikasi iOS.`,
    author: `@devghuraba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3930d8`,
        theme_color: `#3930d8`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
	`gatsby-plugin-offline`,
	{
		resolve: `gatsby-plugin-prefetch-google-fonts`,
		options: {
		  fonts: [
			{
			  family: `Work Sans`,
			  variants: [`300`, `400`, `500`, `600`, `700`]
			},
		  ],
		},
	  }
  ],
}
