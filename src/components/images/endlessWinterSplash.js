import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function EndlessWinterSplash() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    placeholderImage: file(relativePath: { eq: "endlessWinterSplash.jpg" }) {
                        childImageSharp {
                            fluid(maxHeight: 512, maxWidth: 512, cropFocus: CENTER) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
            render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
        />
    );
}
