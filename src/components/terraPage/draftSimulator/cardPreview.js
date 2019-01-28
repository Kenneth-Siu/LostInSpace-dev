import React from "react";
import CardImage from "./cardImage";
import styles from "./cardPreview.module.scss";

export default function CardPreview({ url }) {
    return <div className={styles.cardPreview}>{url && <CardImage url={url} />}</div>;
}
