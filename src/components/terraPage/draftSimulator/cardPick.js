import React from "react";
import CardImage from "./cardImage";

export default function CardPick({ onClick, isSuggestedPick, showAIRatings, imageUrl, rating }) {
    return (
        <div onClick={onClick} className={isSuggestedPick && showAIRatings ? "suggested-pick" : ""}>
            <CardImage url={imageUrl} />
            {showAIRatings && <div className="pick-rating">{rating.toFixed(3)}</div>}
        </div>
    );
}
