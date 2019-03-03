export default class SynergyAnalyser {
    constructor(picks, pick) {
        this.artifact = 0;
        this.etb = 0;
        this.lifegain = 0;
        this.lifeloss = 0;
        this.equipment = 0;
        this.creatureTokens = 0;
        this.fodder = 0;
        this.creatureFodder = 0;
        this.artifactFodder = 0;
        this.police = 0;
        this.evasion = 0;
        this.flash = 0;
        this.cheating = 0;
        this.scry = 0;
        this.combatTrick = 0;
        this.mutantXeno = 0;

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
        let numberOfSynergies = 0;

        for (const prop in card.notes.synergies) {
            if (this[prop] === undefined) {
                throw new Error(`Missing card tag: ${prop}`);
            }
            fractionOfPotentialFulfilled += this[prop] / card.notes.synergies[prop];
            numberOfSynergies++;
        }
        return Math.max(1, fractionOfPotentialFulfilled / numberOfSynergies);
    }

    countCards(cards) {
        cards.forEach(card => this.countCard(card));
    }

    countCard(card) {
        for (const prop in card.notes.tags) {
            if (this[prop] === undefined) {
                throw new Error(`Missing card tag: ${prop}`);
            }
            this[prop] += card.notes.tags[prop];
        }
    }

    getOptimism() {
        return Math.max(0, Math.min(1.0, 1.6 - this.totalPicks * 0.2));
    }
}
