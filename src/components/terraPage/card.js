import { withPrefix } from 'gatsby'
import uuid from "uuid";

export const COLORS = Object.freeze({
    WHITE: "W",
    BLUE: "U",
    BLACK: "B",
    RED: "R",
    GREEN: "G"
});

export default class Card {
    constructor(id, name, colorString, castingCost, imageName, rarity, notes, rulesText) {
        this.id = id;
        this.name = name;
        this.colors = getColor(colorString);
        this.cmc = getCmc(castingCost);
        this.imageUrl = withPrefix(`/card-images/${imageName}.png`);
        this.rarity = rarity;
        this.notes = notes;
        this.rulesText = rulesText;
    }

    assignUuid() {
        this.uuid = uuid.v4();
        return this;
    }
}

function getColor(colorString) {
    return colorString.split("");
}

function getCmc(castingCost) {
    if (castingCost.indexOf("X") !== -1) {
        return "X";
    }
    const generic = isNaN(parseInt(castingCost, 10)) ? 0 : parseInt(castingCost, 10);
    const genericAsString = generic === 0 ? "" : generic.toString();
    const colored = castingCost.slice(genericAsString.length).length;
    return generic + colored;
}
