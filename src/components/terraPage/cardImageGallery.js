import React from "react";
import cardList from "./cardList";
import styles from "./cardImageGallery.module.scss";

export default function CardImageGallery() {
    return (
        <div className={styles.container}>
            {cardList.map(card => (
                <div className={styles.cardContainer}>
                    <img src={card.imageUrl} className={styles.card} alt={card.name} />
                    <div className={styles.cardName}>{card.name}</div>
                </div>
            ))}
        </div>
    );
}
