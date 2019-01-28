import React from "react";
import CardPicker from "./cardPicker";
import Player from "./player";
import CardPiles from "./cardPiles";
import CardPreview from "./cardPreview";
import CardPick from "./cardPick";
import styles from "./draftSimulator.module.scss";

export default class DraftSimulator extends React.Component {
    constructor(props) {
        super(props);
        this.cardPicker = new CardPicker();
        this.computerPlayers = Player.createTableOfPlayers();
        this.humanPlayer = this.computerPlayers.shift();
        this.state = {
            pack: this.humanPlayer.nextPack.cards.map(card => {
                return this.cardPicker.evaluateCard(this.humanPlayer.picks, card);
            }),
            packNumber: 1,
            picks: this.pilify([]),
            sideboard: this.pilify([]),
            computerColorPreferences: this.computerPlayers.map(player => player.getColorPreferences()),
            computerPicks: [
                this.pilify([]),
                this.pilify([]),
                this.pilify([]),
                this.pilify([]),
                this.pilify([]),
                this.pilify([]),
                this.pilify([])
            ],
            showAIRatings: false,
            showAIPicks: false,
            hoveredCardUrl: null
        };
        this.passDirection = "left";
    }

    render() {
        return (
            <div className="draft-sim">
                {this.state.pack.length > 0 && (
                    <div className={styles.boosterPack}>
                        <h3>
                            Pack {this.state.packNumber} Pick {15 - this.state.pack.length}{" "}
                            <small>Click a card to add it to your deck</small>
                        </h3>
                        <div className={styles.cards}>
                            {this.state.pack.map(card => this.getCardPickElement(card))}
                        </div>
                    </div>
                )}
                <h3>
                    Deck ({this.state.picks.reduce((total, pile) => total + pile.length, 0)}){" "}
                    <small>Click a card to move it to your sideboard</small>
                </h3>
                <CardPiles
                    piles={this.state.picks}
                    onClick={card => this.moveFromPicksToSideboard(card)}
                    onMouseEnter={card => this.handleMouseEnterPileCard(card)}
                    onMouseLeave={() => this.handleMouseLeavePileCard()}
                />
                <h3>
                    Sideboard ({this.state.sideboard.reduce((total, pile) => total + pile.length, 0)}){" "}
                    <small>Click a card to move it to your deck</small>
                </h3>
                <CardPiles
                    piles={this.state.sideboard}
                    onClick={card => this.moveFromSideboardToPicks(card)}
                    onMouseEnter={card => this.handleMouseEnterPileCard(card)}
                    onMouseLeave={() => this.handleMouseLeavePileCard()}
                />
                <div className="toggle-ai-picks">
                    <button onClick={() => this.toggleAIPicks()}>
                        {this.state.showAIPicks ? "Hide AI Picks" : "Show AI Picks"}
                    </button>
                </div>
                {this.state.showAIPicks &&
                    this.state.computerPicks.map((aiPicks, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-12">
                                <h3>
                                    AI {index}&nbsp;—&nbsp; W:{this.state.computerColorPreferences[
                                        index
                                    ].white.toPrecision(3)}&nbsp; U:{this.state.computerColorPreferences[
                                        index
                                    ].blue.toPrecision(3)}&nbsp; B:{this.state.computerColorPreferences[
                                        index
                                    ].black.toPrecision(3)}&nbsp; R:{this.state.computerColorPreferences[
                                        index
                                    ].red.toPrecision(3)}&nbsp; G:{this.state.computerColorPreferences[
                                        index
                                    ].green.toPrecision(3)}&nbsp;
                                </h3>
                            </div>
                            <div className="col-md-12">
                                <CardPiles
                                    piles={aiPicks}
                                    onMouseEnter={card => this.handleMouseEnterPileCard(card)}
                                    onMouseLeave={() => this.handleMouseLeavePileCard()}
                                />
                            </div>
                        </div>
                    ))}
                <CardPreview url={this.state.hoveredCardUrl} />
            </div>
        );
    }

    pilify(cards) {
        const alphetisedCards = cards.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
        return this.splitIntoCmcPiles(alphetisedCards).map(pile => this.sortByColor(pile));
    }

    splitIntoCmcPiles(cards) {
        const piles = [[], [], [], [], [], [], [], []];
        cards.forEach(card => {
            if (card.cmc === "X" || card.cmc === 0) piles[7].push(card);
            else if (card.cmc >= 7) piles[6].push(card);
            else piles[card.cmc - 1].push(card);
        });
        return piles;
    }

    sortByColor(cards) {
        return cards.sort((a, b) => {
            const wubrg = "WUBRG";
            let A, B;

            if (a.color.length === 0) A = 5;
            else if (a.color.length > 1) A = 6;
            else A = wubrg.indexOf(a.color);

            if (b.color.length === 0) B = 5;
            else if (b.color.length > 1) B = 6;
            else B = wubrg.indexOf(b.color);

            return A - B;
        });
    }

    makePick(card) {
        this.humanPlayer.makePick(card);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.computerPick();
        }
        this.humanPlayer.passPack(this.passDirection);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.passPack(this.passDirection);
        }
        if (this.humanPlayer.nextPack.cards.length === 0 && this.state.packNumber < 3) {
            this.humanPlayer.openPack();
            for (const computerPlayer of this.computerPlayers) {
                computerPlayer.openPack();
            }
            this.passDirection = this.passDirection === "left" ? "right" : "left";
            this.setState({ packNumber: this.state.packNumber + 1 });
        }
        this.updatePackState();
        this.updatePicksState();
        this.setState({
            computerColorPreferences: this.computerPlayers.map(computerPlayer => computerPlayer.getColorPreferences()),
            computerPicks: this.computerPlayers.map(computerPlayer => this.pilify(computerPlayer.picks))
        });
    }

    moveFromPicksToSideboard(card) {
        this.humanPlayer.moveFromPicksToSideboard(card);
        this.updatePackState();
        this.updatePicksState();
        this.updateSideboardState();
    }

    moveFromSideboardToPicks(card) {
        this.humanPlayer.moveFromSideboardToPicks(card);
        this.updatePackState();
        this.updatePicksState();
        this.updateSideboardState();
    }

    updatePackState() {
        this.setState({
            pack: this.humanPlayer.nextPack.cards.map(card => {
                return this.cardPicker.evaluateCard(this.humanPlayer.picks, card);
            })
        });
    }

    updatePicksState() {
        this.setState({
            picks: this.pilify(this.humanPlayer.picks)
        });
    }

    updateSideboardState() {
        this.setState({
            sideboard: this.pilify(this.humanPlayer.sideboard)
        });
    }

    toggleAIPicks() {
        this.setState({
            showAIPicks: !this.state.showAIPicks
        });
    }

    getCardPickElement(card) {
        return (
            <CardPick
                key={card.card.uuid}
                onClick={() => {
                    this.makePick(card.card);
                }}
                imageUrl={card.card.imageUrl}
            />
        );
    }

    handleMouseEnterPileCard(card) {
        this.setState({ hoveredCardUrl: card.imageUrl });
    }

    handleMouseLeavePileCard() {
        this.setState({ hoveredCardUrl: null });
    }
}
