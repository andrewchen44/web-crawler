const defaultCrawlResults = {
  matchTag: [],
  containsText: null,
};

const crawlResults = (state = defaultCrawlResults, action) => {
  switch (action.type) {
    case "SET_TAG_MATCHES":
      return Object.assign({}, state, {
        matchTag: action.matches,
      });
      break;
    case "SET_TEXT_FOUND":
      return Object.assign({}, state, {
        containsText: action.found,
      });
      break;
    default:
      return state;
  }
};

export default crawlResults;
