import React from "react";
import CardImage from "./cardImage";

export default class CardPiles extends React.Component {
    render() {
        const sizeOfLargestPile = Math.max(...this.props.piles.map(pile => pile.length));
        return (
            <div className={`card-piles size-of-largest-pile-${sizeOfLargestPile}`}>
                {this.props.piles.map((pile, index) => this.getPileElement(pile, index))}
            </div>
        );
    }

    getPileElement(pile, index) {
        return (
            <div className="pile" key={index}>
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
            >
                <CardImage key={card.uuid} url={card.imageUrl} additionalClasses={`pile-index-${index}`} />
            </div>
        );
    }
}
