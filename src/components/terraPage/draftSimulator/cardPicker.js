import ColorAnalyser from "./colorAnalyser";
import SynergyAnalyser from "./synergyAnalyser";
import CardRating from "./cardRating";

export class ColorPreferences {
    constructor(colorAnalyser) {
        this.white = colorAnalyser.getModifier("W");
        this.blue = colorAnalyser.getModifier("U");
        this.black = colorAnalyser.getModifier("B");
        this.red = colorAnalyser.getModifier("R");
        this.green = colorAnalyser.getModifier("G");
    }
}

export default class CardPicker {
    decidePick(pack, picks) {
        if (!pack || pack.cards.length === 0)
            throw new Error("Sorry Dave, I can't let you pick from a nonexistent or empty pack.");
        this.picks = picks;
        this.evaluatePack(picks, pack);
        return this.makePick();
    }

    evaluateCard(picks, card) {
        const synergyAnalyser = new SynergyAnalyser(picks, card);
        const uncoloredPickRatings = picks.map(
            pick => new CardRating(pick, synergyAnalyser.getExistingPowerOfCard(pick))
        );
        const uncoloredCardRating = new CardRating(card, synergyAnalyser.getPotentialPowerOfCard(card));
        const colorAnalyser = new ColorAnalyser(uncoloredPickRatings, uncoloredCardRating);
        const coloredPickRatings = uncoloredPickRatings.map(
            pickRating => pickRating.rating * colorAnalyser.getModifier(pickRating.card.color)
        );
        const aggregateColoredPickRatings = coloredPickRatings.reduce((a, b) => a + b, 0);
        const coloredCardRating = uncoloredCardRating.rating * colorAnalyser.getModifier(card.color);
        return new CardRating(card, aggregateColoredPickRatings + coloredCardRating);
    }

    getColorPreferences(picks) {
        const synergyAnalyser = new SynergyAnalyser(picks);
        const uncoloredPickRatings = picks.map(
            pick => new CardRating(pick, synergyAnalyser.getExistingPowerOfCard(pick))
        );
        const colorAnalyser = new ColorAnalyser(uncoloredPickRatings);
        return new ColorPreferences(colorAnalyser);
    }

    evaluatePack(picks, pack) {
        this.packRatings = pack.cards.map(card => this.evaluateCard(picks, card));
    }

    makePick() {
        return this.packRatings.reduce((accumulator, currentValue) => {
            if (currentValue.rating >= accumulator.rating) return currentValue;
            return accumulator;
        }).card;
    }
}
