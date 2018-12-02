import Card from "./card";

const jsonCardList = require("./cardList.json");

const sortedJsonCardList = jsonCardList.sort((a, b) => a.id - b.id);

export default sortedJsonCardList.map(jsonCard => {
    return new Card(
        jsonCard.id,
        jsonCard.name,
        jsonCard.color,
        jsonCard.castingCost,
        jsonCard.imageName,
        jsonCard.rarity,
        jsonCard.notes,
        jsonCard.rulesText
    );
});
