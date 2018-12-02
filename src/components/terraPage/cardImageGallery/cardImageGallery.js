import React from "react";
import cardList from "../cardList";
import { COLOR } from "../card";
import FilterButtons, { FILTER } from "./filterButtons";
import styles from "./cardImageGallery.module.scss";

export default class CardImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: FILTER.WHITE
        };
    }

    render() {
        return (
            <>
                <FilterButtons filter={this.state.filter} onFilterChange={filter => this.changeFilter(filter)} />
                <div className={styles.cardImagesContainer}>
                    {this.getFilteredCards().map(card => (
                        <div className={styles.cardContainer} key={card.id}>
                            <img src={card.imageUrl} className={styles.card} alt={card.name} />
                            <div className={styles.cardName}>{card.name}</div>
                        </div>
                    ))}
                </div>
                <FilterButtons filter={this.state.filter} onFilterChange={filter => this.changeFilter(filter)} />
            </>
        );
    }

    changeFilter(filter) {
        this.setState({
            filter: filter
        });
    }

    getFilteredCards() {
        return cardList.filter(card => {
            switch (this.state.filter) {
                case FILTER.NONE:
                    return true;
                case FILTER.GOLD:
                    return card.colors.length > 1;
                case FILTER.COLORLESS:
                    return card.colors.length === 0;
                case FILTER.WHITE:
                    return this.isColor(card.colors, COLOR.WHITE);
                case FILTER.BLUE:
                    return this.isColor(card.colors, COLOR.BLUE);
                case FILTER.BLACK:
                    return this.isColor(card.colors, COLOR.BLACK);
                case FILTER.RED:
                    return this.isColor(card.colors, COLOR.RED);
                case FILTER.GREEN:
                    return this.isColor(card.colors, COLOR.GREEN);
                default:
                    return true;
            }
        });
    }

    isColor(cardColors, color) {
        return cardColors.length === 1 && cardColors[0] === color;
    }
}
