import { Link } from "gatsby";
import React from "react";
import styles from "./tile.module.scss";
import UnderConstructionOverlay from "../images/underConstructionOverlay";

export default function Tile({ to, image, name, description, underConstruction }) {
    if (underConstruction) {
        return (
            <div className={styles.tile}>
                {tileContent(image, name, description)}
                <div className={styles.underConstructionOverlay}>
                    <UnderConstructionOverlay />
                </div>
            </div>
        );
    }
    return (
        <Link to={to} className={styles.tile}>
            {tileContent(image, name, description)}
        </Link>
    );
}

function tileContent(image, name, description) {
    return (
        <>
            <div className={styles.background}>{image}</div>
            <div className={styles.text}>
                <div className={styles.name}>{name}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </>
    );
}
