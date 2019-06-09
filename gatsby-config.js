module.exports = {
    siteMetadata: {
        title: "Lost in Space"
    },
    pathPrefix: "/LostInSpace",
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#26303C",
                theme_color: "#26303C",
                display: "minimal-ui",
                icon: "src/images/favicon.png"
            }
        }
    ]
};
