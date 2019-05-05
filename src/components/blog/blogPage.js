import React from "react";
import Layout from "../layout/layout";
import styles from "./blogPage.module.scss";
import Post from "./post";

export default function BlogPage(props) {
    const post = props.pageContext.post;
    const headerName = `${post.title}`;

    return (
        <Layout pageTitle={headerName} thin>
            <div className={styles.blogPost}>
                <Post post={post} />
            </div>
        </Layout>
    );
}
