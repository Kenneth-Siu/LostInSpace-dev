import React from "react";
import styles from "./cardImage.module.scss";

export default function CardImage({ url, additionalClasses, onMouseEnter, name }) {
    return (
        <img
            src={url}
            className={`${styles.card}${(additionalClasses && " " + additionalClasses) || ""}`}
            onMouseEnter={() => {
                if (onMouseEnter) onMouseEnter();
            }}
            alt={name}
        />
    );
}
