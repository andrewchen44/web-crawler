import React from "react";

const TagResults = props => {
  let matches = props.matchTag;
  if(matches === undefined || matches.length === 0) {
    return null;
  } else {
    return <div>
      {matches.map((match, index) => {
        return <div key={index}>{match.innerText}</div>
      })}
    </div>;
    }
};

export default TagResults;