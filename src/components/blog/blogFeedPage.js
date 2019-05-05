import React from "react";
import Layout from "../layout/layout";
import Post from "./post";
import styles from "./blogFeedPage.module.scss";

export default function BlogFeedPage({ pageContext }) {
    const posts = pageContext.posts;

    return (
        <Layout pageTitle={"Test"} thin>
            <div className={styles.feed}>
                {posts.map(post => (
                    <Post post={post} />
                ))}
            </div>
        </Layout>
    );
}
