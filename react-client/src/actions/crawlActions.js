export function setTagMatches(matches) {
  return {
    type: 'SET_TAG_MATCHES',
    matches,
  }
};

export function setTextFound(found) {
  return {
    type: 'SET_TEXT_FOUND',
    found,
  }
}