import cardList from "../cardList";
import { random, cloneDeep, sample, shuffle } from "lodash";

const mythics = cardList.filter(card => card.rarity === "M");
const rares = cardList.filter(card => card.rarity === "R");
const uncommons = cardList.filter(card => card.rarity === "U");
const commons = cardList.filter(card => card.rarity === "C");

export default function generatePack() {
    const cards = [];
    if (random(0, 7) === 0) {
        cards.push(cloneDeep(sample(mythics)).assignUuid());
    } else {
        cards.push(cloneDeep(sample(rares)).assignUuid());
    }
    cards.push(...generateUncommons());
    cards.push(...generateCommons());
    return cards;
}

function generateUncommons() {
    const cards = [];
    for (let i = 0; i < 3; i++) {
        const bannedCardColors = cards.map(card => card.color);
        const otherColorUncommons = uncommons.filter(
            uncommon => !bannedCardColors.some(cardColor => cardColor === uncommon.color)
        );
        cards.push(cloneDeep(sample(otherColorUncommons)).assignUuid());
    }
    return cards;
}

function generateCommons() {
    const cards = [];
    const singleColors = ["W", "U", "B", "R", "G"];
    singleColors.forEach(singleColor => cards.push(generateCommonOfColor(singleColor)));
    for (let i = 0; i < 5; i++) {
        const bannedCardColors = [];
        const existingCardColors = cards.map(card => card.color);
        existingCardColors.forEach(color => {
            if (
                existingCardColors.filter(existingColor => existingColor === color).length >= 3 &&
                !bannedCardColors.some(bannedColor => bannedColor === color)
            ) {
                bannedCardColors.push(color);
            }
        });
        const otherColorCommons = commons.filter(
            common => !bannedCardColors.some(cardColor => cardColor === common.color)
        );
        const nonRepeatedCommons = otherColorCommons.filter(common => !cards.some(card => card.id === common.id));
        cards.push(cloneDeep(sample(nonRepeatedCommons)).assignUuid());
    }
    return shuffle(cards);
}

function generateCommonOfColor(singleColor) {
    const coloredCommons = commons.filter(common => common.color === singleColor);
    return cloneDeep(coloredCommons[random(0, coloredCommons.length - 1)]).assignUuid();
}
