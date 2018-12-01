import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header/header";
import "./layout.scss";

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
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    </Helmet>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div className="layout-page-container">{children}</div>
                </>
            )}
        />
    );
}
