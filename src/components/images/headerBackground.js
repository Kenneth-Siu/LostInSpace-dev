import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function HeaderBackground() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    placeholderImage: file(relativePath: { eq: "horizon.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1920, cropFocus: CENTER) {
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
