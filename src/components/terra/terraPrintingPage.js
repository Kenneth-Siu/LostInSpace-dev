import React from "react";
import cardList from "./cardList";
import updatesList from "./printing/updatesList";
import tokensList from "./printing/tokensList";
import { flatten, filter } from "lodash";
import styles from "./printing/printing.module.scss"

export default function TerraPrintingPage() {
    const cardUrls = flatten(
        cardList.map(card => {
            if (card.rarity === "C") {
                return [card.imageUrl, card.imageUrl, card.imageUrl, card.imageUrl];
            }
            if (card.rarity === "U") {
                return [card.imageUrl, card.imageUrl];
            }
            return card.imageUrl;
        })
    );

    const tokenUpdateUrls = tokensList;

    const updateUrls =
        updatesList.length === 0
            ? cardUrls
            : filter(cardUrls, cardUrl => {
                  return updatesList.some(updateCardUrl => updateCardUrl === cardUrl);
              });

    return (
        <div className={styles.printBox}>
            {updateUrls.concat(tokenUpdateUrls).map(url => (
                <img src={url} alt={url} className={styles.printCard} />
            ))}
        </div>
    );
}
