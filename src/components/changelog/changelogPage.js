import React from "react";
import Layout from "../layout/layout";
import styles from "./changelogPage.module.scss";
import Post from "./post";

export default function ChangelogPage(props) {
    const post = props.pageContext.post;
    const headerName = `${post.title}`;

    return (
        <Layout pageTitle={headerName} thin>
            <div className={styles.changelogPost}>
                <Post post={post} />
            </div>
        </Layout>
    );
}
