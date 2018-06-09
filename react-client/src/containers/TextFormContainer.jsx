import React from "react";
import { connect } from "react-redux";
import TextForm from "../components/TagForm.jsx";

const TextFormContainer = props => <TextForm {...props} />;

export default connect()(TextFormContainer);
