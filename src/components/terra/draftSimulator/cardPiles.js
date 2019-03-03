import React from "react";
import CardImage from "./cardImage";
import styles from "./cardPiles.module.scss";

export default class CardPiles extends React.Component {
    render() {
        const piles = this.pilify(this.props.cards);
        const sizeOfLargestPile = Math.max(...piles.map(pile => pile.length));
        return (
            <div className={`${styles.cardPiles} ${styles["sizeOfLargestPile" + sizeOfLargestPile]}`}>
                {piles.map((pile, index) => this.getPileElement(pile, index))}
            </div>
        );
    }

    getPileElement(pile, index) {
        return (
            <div className={styles.pile} key={index}>
                {pile.map((card, index) => this.getPileCardImageElement(card, index))}
            </div>
        );
    }

    getPileCardImageElement(card, index) {
        return (
            <div
                onClick={() => {
                    if (this.props.onClick) this.props.onClick(card);
                }}
                onMouseEnter={() => {
                    if (this.props.onMouseEnter) this.props.onMouseEnter(card);
                }}
                onMouseLeave={() => {
                    if (this.props.onMouseLeave) this.props.onMouseLeave();
                }}
                key={index}
            >
                <CardImage key={card.uuid} url={card.imageUrl} additionalClasses={styles.card + " " + styles["pileIndex" + index]} />
            </div>
        );
    }

    pilify(cards) {
        const alphetisedCards = cards.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
        return this.splitIntoCmcPiles(alphetisedCards).map(pile => this.sortByColor(pile));
    }

    splitIntoCmcPiles(cards) {
        const piles = [[], [], [], [], [], [], [], []];
        cards.forEach(card => {
            if (card.cmc === "X" || card.cmc === 0) piles[7].push(card);
            else if (card.cmc >= 7) piles[6].push(card);
            else piles[card.cmc - 1].push(card);
        });
        return piles;
    }

    sortByColor(cards) {
        return cards.sort((a, b) => {
            const wubrg = "WUBRG";
            let A, B;

            if (a.color.length === 0) A = 5;
            else if (a.color.length > 1) A = 6;
            else A = wubrg.indexOf(a.color);

            if (b.color.length === 0) B = 5;
            else if (b.color.length > 1) B = 6;
            else B = wubrg.indexOf(b.color);

            return A - B;
        });
    }
}
