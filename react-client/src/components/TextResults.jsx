import React from "react";

const TextResults = props => {
  const contains = props.containsText;
  if(contains === null || contains === undefined) {
    return null;
  } else {
    return <div>Contains text: {contains + ''}</div>;
  }
};

export default TextResults;