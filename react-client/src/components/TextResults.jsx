import React from "react";

const TextResults = props => {
  const contains = props.containsText;
  let exists = '';
  if(contains !== null && contains !== undefined) {
    exists = contains ? 'Yes' : 'No';
  } 
  
  return <div className='section-container border-black'>
    <div>Does website contain searched text: {exists}</div>
    </div>;
};

export default TextResults;