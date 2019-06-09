import { withPrefix } from 'gatsby';

const updatesList = [
    "Bring to Justice",
    "Head Detective",
    "Mongrel Companion",
    "Rangor Watchmen",
    "Undercover Agent",
    "Engine Welder",
    "Exiled Xenologist",
    "Future Insight",
    "Migratory City",
    "Umida Biotechnology",
    "Voyages End",
    "Back to Work",
    "Disassemble",
    "Metamorphic Membrane",
    "Mindmeld Torturer",
    "Neural Devourer",
    "Punitive Counterstrike",
    "Urban Revenant",
    "Battle Flow",
    "Frantic Investigator",
    "Iridium Throwing Knife",
    "Leave Behind",
    "Mindmeld Battlesuit",
    "Rip Space-Time",
    "Rocket Salvo",
    "Take Hostage",
    "Escaped Test Subject",
    "Growth Genetics",
    "Kushak Research Council"
];

export default updatesList.map(cardName => withPrefix(`/card-images/${cardName}.png`));
