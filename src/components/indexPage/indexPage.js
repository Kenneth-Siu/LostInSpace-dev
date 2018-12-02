import React from "react";
import { Link } from "gatsby";
import Layout from "../layout/layout";

export default function IndexPage() {
    return (
        <Layout>
            <h1>Hi people</h1>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
}
