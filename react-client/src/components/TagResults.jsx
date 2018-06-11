import React from "react";

const TagResults = props => {
  let matches = props.matchTag;
  let tags = '';
  if(matches !== undefined && matches.length > 0) {
    tags = matches.map((match, index) => {
      return <div className='footer' key={index}>-{match.innerText}</div>
    });
  }
  return <div className='section-container border-black'>
    <div>Text of elements that match the searched tag:</div>
    {tags}
    </div>;
};

export default TagResults;