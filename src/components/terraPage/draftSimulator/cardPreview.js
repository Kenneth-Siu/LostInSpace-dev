import React from "react";
import CardImage from "./cardImage";

export default function CardPreview({ url }) {
    return <div className="card-preview">{url && <CardImage url={url} />}</div>;
}
