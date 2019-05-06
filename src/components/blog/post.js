import React from "react";
import { withPrefix, Link } from "gatsby";
import marked from "marked";
import styles from "./post.module.scss";
import moment from "moment";
import TagIcon from "../icons/tagIcon";
import regexEscape from "../../helpers/regexEscape";

export default function Post({ post }) {
    const markdownAsHtml = removeTitle(insertImages(marked(post.markdown), post.images), post.title);
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
            <div className={styles.postBody}>
                <h1 id={post.slug}>
                    <Link to={`/blog/${post.slug}/`}>{post.title}</Link>
                </h1>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: markdownAsHtml }} />
            </div>
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

function removeTitle(html, title) {
    return html.replace(new RegExp(`<h1.+${regexEscape(title)}<\/h1>`), "");
}
