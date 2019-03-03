import { withPrefix } from 'gatsby';
import { fill, flatten } from 'lodash';

const tokensList = [
    // { name: "Amlich Emblem", frequency: 4 },
    // { name: "Amlich Emblem.1", frequency: 4 },
    // { name: "Military", frequency: 12 },
    // { name: "Police", frequency: 6 },
    // { name: "Umida Emblem", frequency: 4 },
    // { name: "Assassin", frequency: 4 },
    // { name: "The Left Hand Emblem", frequency: 1 },
    // { name: "Mutant", frequency: 4 },
    // { name: "Mutant.1", frequency: 4 },
    // { name: "Xeno Propagator", frequency: 3 },
    // { name: "Xeno Scion", frequency: 16 },
    // { name: "Shaitan", frequency: 1 },
    // { name: "Credit", frequency: 3 },
    // { name: "Credit.1", frequency: 3 },
    // { name: "Credit.2", frequency: 3 },
    // { name: "Equipment", frequency: 6 },
    // { name: "Equipment.1", frequency: 6 },
    // { name: "Equipment.2", frequency: 6 },
    // { name: "Fighter", frequency: 8 },
    // { name: "Hologram", frequency: 8 },
    // { name: "Mech", frequency: 5 },
    // { name: "Mech.1", frequency: 5 },
    // { name: "Mech.2", frequency: 5 },
    // { name: "Wildschwein", frequency: 2 },
    // { name: "Teleporter", frequency: 4 },
    // { name: "Teleporter.1", frequency: 4 },
    // { name: "Charging Subroutine", frequency: 90 }
]

export default flatten(tokensList.map(token => {
    return fill(Array(token.frequency), withPrefix(`/card-images/${token.name}.png`));
}));