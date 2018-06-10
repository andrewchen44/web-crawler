// gets state from redux, displays what text have those tags

import React from "react";

const TagResults = props => {
  let matches = props.matchTag;
  if(matches !== undefined && matches.length === 0) {
    return null;
  } else {
    return <div>matches</div>;
    }
};

export default TagResults;