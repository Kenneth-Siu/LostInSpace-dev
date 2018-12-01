import { Link } from "gatsby";
import React from "react";
import styles from "./tile.module.scss";

export default function Tile({ to, image, name, description }) {
    return (
        <Link to={to} className={styles.tile}>
            <div className={styles.image}>{image}</div>
            <div className={styles.text}>
                <div className={styles.name}>{name}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </Link>
    );
}
