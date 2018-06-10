// gets state from redux
// displays whether or not website contains text\

import React from "react";

const TextResults = props => {
  const contains = props.containsText;
  if(contains === null) {
    return null;
  } else {
    return <div>Contains text: {contains + ''}</div>;
  }
};

export default TextResults;