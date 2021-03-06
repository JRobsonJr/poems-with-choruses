module.exports = {
    pathPrefix: '/poems-with-choruses',
    siteMetadata: {
        title: `Poems With Choruses`,
        description: `Documenting life as I try to fit it in the lyrics of a song.`,
        author: `Robson Junior`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Libre Baskerville`,
                        subsets: [`latin`, `latin-ext`],
                        variants: [`400`, `400i`, `700`, `700i`],
                    },
                    {
                        family: `Nunito Sans`,
                        subsets: [`latin`, `latin-ext`],
                        variants: [`400`, `400i`],
                    },
                    {
                        family: `Inter`,
                        subsets: [`latin`, `latin-ext`],
                        variants: [`400`, `400i`, `700`, `700i`],
                    },
                ],
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/lights-square.jpeg`,
            },
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: 'UA-173187710-1',
                head: false,
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `pt`],
                defaultLanguage: `en`,
            },
        },
        'gatsby-plugin-remove-trailing-slashes',
    ],
};
