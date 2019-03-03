import Pack from "./pack";
import CardPicker from "./cardPicker";
import { findIndex, remove, pullAt } from "lodash";

export default class Player {
    constructor(leftHandPlayer) {
        this.nextPack = new Pack();
        this.pack = null;
        this.picks = [];
        this.sideboard = [];
        this.cardPicker = new CardPicker();
        this.leftHandPlayer = null;
        this.rightHandPlayer = null;
        if (leftHandPlayer) {
            this.leftHandPlayer = leftHandPlayer;
            this.leftHandPlayer.setRightHandPlayer(this);
        }
    }

    makePick(card) {
        if (!this.nextPack || this.nextPack.cards.length === 0) {
            throw new Error("No next pack?!?!");
        }
        this.pack = this.nextPack;
        this.nextPack = null;
        const cardIndex = findIndex(this.pack.cards, cardInPack => cardInPack.id === card.id);
        if (cardIndex === -1) {
            throw new Error(`You tried to pick ${card.name} that's not in the pack. Cheater.`);
        }
        const pick = pullAt(this.pack.cards, cardIndex)[0];
        this.picks.push(pick);
    }

    passPack(passDirection) {
        if (passDirection === "left") {
            this.leftHandPlayer.receivePack(this.pack);
        } else {
            this.rightHandPlayer.receivePack(this.pack);
        }
    }

    computerPick() {
        const pick = this.cardPicker.decidePick(this.nextPack, this.picks);
        this.makePick(pick);
        this.sideboardUnwantedCards();
    }

    openPack() {
        this.nextPack = new Pack();
    }

    getColorPreferences() {
        return this.cardPicker.getColorPreferences(this.picks);
    }

    moveFromPicksToSideboard(card) {
        const removedCard = remove(this.picks, pick => pick === card);
        this.sideboard.push(...removedCard);
    }

    moveFromSideboardToPicks(card) {
        const removedCard = remove(this.sideboard, pick => pick === card);
        this.picks.push(...removedCard);
    }

    setLeftHandPlayer(leftHandPlayer) {
        this.leftHandPlayer = leftHandPlayer;
        if (!leftHandPlayer.rightHandPlayer) {
            leftHandPlayer.setRightHandPlayer(this);
        }
    }

    setRightHandPlayer(rightHandPlayer) {
        this.rightHandPlayer = rightHandPlayer;
        if (!rightHandPlayer.leftHandPlayer) {
            rightHandPlayer.setLeftHandPlayer(this);
        }
    }

    receivePack(pack) {
        this.nextPack = pack;
    }

    sideboardUnwantedCards() {
        const colorPreferences = this.getColorPreferences();
        const removedCards = remove(this.picks, pick => {
            const colorsOfCard = pick.color.split("");
            return colorsOfCard.some(color => {
                if (color === "W") return colorPreferences.white < 0.1;
                if (color === "U") return colorPreferences.blue < 0.1;
                if (color === "B") return colorPreferences.black < 0.1;
                if (color === "R") return colorPreferences.red < 0.1;
                if (color === "G") return colorPreferences.green < 0.1;
                return false;
            });
        });
        this.sideboard.push(...removedCards);
    }

    static createTableOfPlayers() {
        const numOfPlayers = 8;
        const players = [];
        for (let i = 0; i < numOfPlayers; i++) {
            const newPlayer = i === 0 ? new Player() : new Player(players[i - 1]);
            players.push(newPlayer);
        }
        players[0].setLeftHandPlayer(players[numOfPlayers - 1]);
        return players;
    }
}
