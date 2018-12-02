import React from "react";

export default function CardImage({ url, additionalClasses, onMouseEnter, name }) {
    return (
        <img
            src={url}
            className={`card${(additionalClasses && " " + additionalClasses) || ""}`}
            onMouseEnter={() => {
                if (onMouseEnter) onMouseEnter();
            }}
            alt={name}
        />
    );
}
