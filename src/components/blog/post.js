import React from "react";
import { withPrefix } from "gatsby";
import marked from "marked";
import styles from "./post.module.scss";
import moment from "moment";
import TagIcon from "../icons/tagIcon";

export default function Post({ post }) {
    const markdownAsHtml = insertImages(marked(post.markdown), post.images);
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <p className={styles.date}>
                    <small>{moment(post.publishDate).format("Do MMM YYYY")}</small>
                </p>
                <ul className={styles.tags}>
                    {post.tags.map(tag => (
                        <li>
                            <small>
                                <TagIcon />
                                {tag}
                            </small>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: markdownAsHtml }} />
        </div>
    );
}

function insertImages(html, images) {
    let htmlString = html;
    images.forEach(image => {
        htmlString = htmlString.replace(`src="${image}"`, `src="${withPrefix(`/blog/${image}.png`)}"`);
    });
    return htmlString;
}
