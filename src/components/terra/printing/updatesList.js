import { withPrefix } from 'gatsby';

const updatesList = [];

export default updatesList.map(cardName => withPrefix(`/card-images/${cardName}.png`));
