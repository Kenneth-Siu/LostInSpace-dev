import React from "react";
import CardImage from "./cardImage";

export default function CardPick({ onClick, imageUrl }) {
    return (
        <div onClick={onClick}>
            <CardImage url={imageUrl} />
        </div>
    );
}
