module.exports = {
	siteMetadata: {
		title: `Devghuraba Teknologi`,
		description: `Devghuraba Teknologi adalah Software Developer yang menyediakan jasa pembuatan aplikasi berbasis web dan mobile.`,
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
				name: `Devghuraba Teknologi`,
				short_name: `Devghuraba`,
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
						variants: [`300`, `400`, `500`, `600`, `700`],
					},
				],
			},
		},
		`gatsby-plugin-sass`,
	],
};
