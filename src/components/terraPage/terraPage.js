import React from "react";
import Layout from "../layout/layout";
import CardImageGallery from "./cardImageGallery/cardImageGallery";
import DraftSimulator from "./draftSimulator/draftSimulator";
import Tabs from "./tabs";

export default function TerraPage() {
    const headerName = "Terra 2170";
    const pages = [
        { name: "Card Image Gallery", content: <CardImageGallery />, urlHash: "#cards" },
        { name: "Draft Simulator", content: <DraftSimulator />, urlHash: "#draftsim" }
    ];

    return (
        <Layout pageTitle={headerName}>
            <Tabs header={headerName} content={pages} />
        </Layout>
    );
}
