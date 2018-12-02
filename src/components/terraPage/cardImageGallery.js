import React from "react";
import cardList from "./cardList";
import CardImage from "./cardImage";

export default function CardImageGallery() {
    return <div>
        {cardList.map(card => <CardImage src={card.imageUrl} />)}
    </div>;
}