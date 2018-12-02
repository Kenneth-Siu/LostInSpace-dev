import React from "react";
import styles from "./filterButtons.module.scss";

export const FILTER = Object.freeze({
    NONE: "",
    WHITE: "W",
    BLUE: "U",
    BLACK: "B",
    RED: "R",
    GREEN: "G",
    GOLD: "X",
    COLORLESS: "C"
});

export default class FilterButtons extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {this.getButton(FILTER.WHITE, "White")}
                {this.getButton(FILTER.BLUE, "Blue")}
                {this.getButton(FILTER.BLACK, "Black")}
                {this.getButton(FILTER.RED, "Red")}
                {this.getButton(FILTER.GREEN, "Green")}
                {this.getButton(FILTER.GOLD, "Gold")}
                {this.getButton(FILTER.COLORLESS, "Colorless")}
            </div>
        );
    }

    getButton(filter, name) {
        return (
            <button
                className={`${styles.button} ${this.props.filter === filter ? styles.selected : ""}`}
                onClick={() => this.handleClick(filter)}>
                {name}
            </button>
        );
    }

    handleClick(filter) {
        this.props.onFilterChange(this.props.filter === filter ? FILTER.NONE : filter);
    }
}
