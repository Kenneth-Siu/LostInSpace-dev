export default class ColorAnalyser {

    constructor(existingPickRatings, potentialPickRating) {

        this.white = Math.random() * 0.1;
        this.blue = Math.random() * 0.1;
        this.black = Math.random() * 0.1;
        this.red = Math.random() * 0.1;
        this.green = Math.random() * 0.1;

        this.totalPicks = existingPickRatings.length;
        this.countRatings(existingPickRatings);
        if (potentialPickRating) {
            this.countRating(potentialPickRating);
        }
        this.generateFuzz();
    }

    getModifier(cardColors) {
        if (cardColors === "") return Math.max(...this.getModifierArray("WUBRG"));
        return Math.min(...this.getModifierArray(cardColors));
    }

    countRatings(ratings) {
        ratings.forEach(rating => this.countRating(rating));
    }

    countRating(rating) {
        if (rating.card.color.indexOf("W") !== -1) this.white += rating.rating;
        if (rating.card.color.indexOf("U") !== -1) this.blue += rating.rating;
        if (rating.card.color.indexOf("B") !== -1) this.black += rating.rating;
        if (rating.card.color.indexOf("R") !== -1) this.red += rating.rating;
        if (rating.card.color.indexOf("G") !== -1) this.green += rating.rating;
    }

    generateFuzz() {
        const unorderedColoredCounts = [
            new ColorCount("white", this.white),
            new ColorCount("blue", this.blue),
            new ColorCount("black", this.black),
            new ColorCount("red", this.red),
            new ColorCount("green", this.green)
        ];
        const orderedColoredCounts = unorderedColoredCounts.sort((a, b) => a.rating - b.rating);
        orderedColoredCounts.forEach((colorCount, index) => {
            this[colorCount.name + "Fuzz"] = this.getColorFuzz(index);
        });
    }

    get fuzzedWhite() {
        return this.white + this.whiteFuzz;
    }
    get fuzzedBlue() {
        return this.blue + this.blueFuzz;
    }
    get fuzzedBlack() {
        return this.black + this.blackFuzz;
    }
    get fuzzedRed() {
        return this.red + this.redFuzz;
    }
    get fuzzedGreen() {
        return this.green + this.greenFuzz;
    }

    getColorFuzz(rankByLowest) {
        switch (rankByLowest) {
            case 0:
                return Math.max(0, Math.min(45, 72 - this.totalPicks * 9));
            case 1:
                return Math.max(0, Math.min(45, 126 - this.totalPicks * 9));
            case 2:
                return Math.max(0, Math.min(45, 216 - this.totalPicks * 12));
            default:
                return Math.max(this.totalPicks * 8 - 67, 45);
        }
    }

    getModifierArray(cardColors) {
        const colorArray = cardColors.split("");
        return colorArray.map(color => this.getModifierForSingleColor(color));
    }

    getModifierForSingleColor(color) {
        if (color === "W") return this.fuzzedWhite / this.getTotalFuzzyCount();
        if (color === "U") return this.fuzzedBlue / this.getTotalFuzzyCount();
        if (color === "B") return this.fuzzedBlack / this.getTotalFuzzyCount();
        if (color === "R") return this.fuzzedRed / this.getTotalFuzzyCount();
        return this.fuzzedGreen / this.getTotalFuzzyCount();
    }

    getTotalFuzzyCount() {
        return this.fuzzedWhite + this.fuzzedBlue + this.fuzzedBlack + this.fuzzedRed + this.fuzzedGreen;
    }
}

class ColorCount {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}
