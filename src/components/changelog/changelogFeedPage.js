import React from "react";
import Layout from "../layout/layout";
import Post from "./post";
import styles from "./changelogFeedPage.module.scss";

export default function ChangelogFeedPage({ pageContext }) {
    const posts = pageContext.posts;

    return (
        <Layout pageTitle={"Changelog"} thin>
            <div className={styles.feed}>
                {posts.map(post => (
                    <Post post={post} />
                ))}
            </div>
        </Layout>
    );
}
