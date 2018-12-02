import React from "react";

export default function CardImage({ src, name, className, onMouseEnter }) {
    return <img src={src} className={className} onMouseEnter={() => onMouseEnter && onMouseEnter()} alt={name} />;
}
