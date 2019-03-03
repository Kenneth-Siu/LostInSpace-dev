import generatePack from "./generatePack";

export default class Pack {
    constructor() {
        this.cards = generatePack();
    }
}
