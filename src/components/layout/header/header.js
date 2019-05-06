import React from "react";
import { Link, withPrefix } from 'gatsby';
import HeaderBackground from "../../images/headerBackground";
import styles from "./header.module.scss";

export default function Header({ siteTitle }) {
    return (
        <div className={styles.header}>
            <div className={styles.background}><HeaderBackground /></div>
            <div className={styles.container}>
                <Link to="/" className={styles.homeLink}>
                    <img className={styles.headerIcon} src={withPrefix("icon.png")} />
                    {siteTitle}
                </Link>
            </div>
        </div>
    );
}
