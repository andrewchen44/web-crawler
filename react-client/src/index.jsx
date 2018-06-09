import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import TagFormContainer from "./containers/TagFormContainer.jsx";
import TagResultsContainer from "./containers/TagResultsContainer.jsx";
import TextFormContainer from "./containers/TextFormContainer.jsx";
import TextResultsContainer from "./containers/TextResultsContainer.jsx";

import webCrawler from './reducers/index.jsx';

const store = createStore(webCrawler);

const App = (props) => {
  return (
    <Provider store={store}>
      <div>
        <TagFormContainer />
        <TagResultsContainer />
        <TextFormContainer />
        <TextResultsContainer />
      </div>
    </Provider> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'));