import React from "react";
import { connect } from "react-redux";
import TagResults from "../components/TagResults.jsx";

const TagResultsContainer = props => <TagResults {...props} />;

const mapStateToProps = state => {
  return { matchTag: state.matchTag };
};

export default connect(mapStateToProps,)(TagResultsContainer);
