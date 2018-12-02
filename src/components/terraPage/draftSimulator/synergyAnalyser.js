export default class SynergyAnalyser {
    constructor(picks, pick) {
        this.devices = 0;
        this.deviceTokens = 0;
        this.lifeloss = 0;
        this.lifegain = 0;
        this.unitTokens = 0;
        this.deathTrigger = 0;
        this.etb = 0;
        this.equipment = 0;
        this.atarka = 0;
        this.tactical = 0;
        this.evasion = 0;
        this.ramp = 0;

        this.totalPicks = picks.length;
        this.countCards(picks);
        if (pick) {
            this.countCard(pick);
        }
    }

    getPotentialPowerOfCard(card) {
        if (!card.notes.potential) return card.notes.power;
        const fractionOfPotential = this.getFractionOfPotential(card);
        return (
            card.notes.power +
            (card.notes.potential - card.notes.power) *
                (fractionOfPotential + (1 - fractionOfPotential) * this.getOptimism())
        );
    }

    getExistingPowerOfCard(card) {
        if (!card.notes.potential) return card.notes.power;
        return card.notes.power + (card.notes.potential - card.notes.power) * this.getFractionOfPotential(card);
    }

    getFractionOfPotential(card) {
        let fractionOfPotentialFulfilled = 0;

        for (const prop in card.notes.synergies) {
            if (this[prop] === undefined) {
                throw new Error("Missing card tag.");
            }
            fractionOfPotentialFulfilled += this[prop] / card.notes.synergies[prop];
        }
        return fractionOfPotentialFulfilled;
    }

    countCards(cards) {
        cards.forEach(card => this.countCard(card));
    }

    countCard(card) {
        for (const prop in card.notes.tags) {
            if (this[prop] === undefined) {
                throw new Error("Missing card tag.");
            }
            this[prop] += card.notes.tags[prop];
        }
    }

    getOptimism() {
        return Math.max(0, Math.min(1.0, 1.6 - this.totalPicks * 0.2));
    }
}
