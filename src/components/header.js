import { Link } from "gatsby";
import React from "react";
import HeaderIcon from "./images/headerIcon";
import styles from "./header.module.scss";

export default function Header({ siteTitle }) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.homeLink}>
                    <div className={styles.headerIcon}>
                        <HeaderIcon />
                    </div>
                    <h1>{siteTitle}</h1>
                </Link>
            </div>
        </div>
    );
}
