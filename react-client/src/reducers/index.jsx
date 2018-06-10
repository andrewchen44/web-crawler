const defaultCrawlResults = {
  matchTag: [],
  containsText: null,
};

const crawlResults = (state = defaultCrawlResults, action) => {
  switch (action.type) {
    case "SET_TAG_MATCHES":
      let newMatches = { matchTag: action.matches }
      return newMatches;
      break;
    case "SET_TEXT_FOUND":
      let newFound = { containsText: action.found }
      return newFound;
      break;
    default:
      return state;
  }
};

export default crawlResults;
