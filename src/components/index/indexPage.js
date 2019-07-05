import React from "react";
import Layout from "../layout/layout";
import Tile from "./tile";
import BlogSplash from "../images/blogSplash";
import TerraSplash from "../images/terraSplash";
// import EndlessWinterSplash from "../images/endlessWinterSplash";
import FogsworthSplash from "../images/fogsworthSplash";
// import MythmakersSplash from "../images/mythmakersSplash";
// import CityBlocksSplash from "../images/cityBlocksSplash";
import styles from "./indexPage.module.scss";

export default function IndexPage() {
    return (
        <Layout>
            <div className={styles.indexPage}>
                <Tile
                    to="/blog/"
                    image={<BlogSplash />}
                    name="Blog"
                    description="Add some new tricks to your toolbox. Find articles on game theory, strategy, and design."
                />
                <Tile
                    to="/terra/"
                    image={<TerraSplash />}
                    name="Terra 2170"
                    description="A science fiction themed Magic: the Gathering custom expansion with 243 cards and four new mechanics. Designed for a deep booster draft experience."
                />
                {/* <Tile
                    to="/"
                    image={<EndlessWinterSplash />}
                    name="Endless Winter"
                    description="Crash-landed on the legendary planet Auriga, you must work together with your fellow shipmates to escape before the planet freezes over. A co-operative game for 1–4 players."
                /> */}
                <Tile
                    to="/"
                    image={<FogsworthSplash />}
                    name="The Great Billingsworth Manor Jumble Sale"
                    description="What better way for the rich and idle to pass time? A bluffing, deduction, and negotiation game for 3–6 players."
                    underConstruction
                />
                {/* <Tile
                    to="/"
                    image={<MythmakersSplash />}
                    name="Mythmakers"
                    description="Heroes are remembered by the stories people tell. Craft the best fireside tale in a drafting game for 2–6 players."
                /> */}
                {/* <Tile
                    to="/"
                    image={<CityBlocksSplash />}
                    name="City Blocks"
                    description="Everything is interconnected, from between your own city's blocks, to your fellow players' blocks. An environmental city-building game for 2–4 players."
                /> */}
            </div>
        </Layout>
    );
}
