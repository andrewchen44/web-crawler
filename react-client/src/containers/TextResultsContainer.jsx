import React from "react";
import { connect } from "react-redux";
import TextResults from "../components/TextResults.jsx";

const TextResultsContainer = props => <TextResults {...props} />;

const mapStateToProps = state => {
  return { containsText: state.containsText };
};

export default connect(mapStateToProps)(TextResultsContainer);
