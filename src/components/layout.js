import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css";

export default function Layout({ pageTitle, children }) {
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <Helmet title={pageTitle ? `${pageTitle} · Lost in Space` : "Lost in Space"}>
                        <html lang="en" />
                    </Helmet>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    {children}
                </>
            )}
        />
    );
}
