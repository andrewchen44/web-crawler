import React from "react";
import { connect } from "react-redux";
import TagForm from "../components/TagForm.jsx";

const TagFormContainer = props => <TagForm {...props} />;

export default connect()(TagFormContainer);
