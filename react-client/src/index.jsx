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
      <div className='app-container'>
        <div className='title blue'> Andrew's Amazing Web Crawler</div>
        <div className='section-container shadow-border'>
          <div className='text-align-center'>
            <div className='header blue'>Tag Checker</div>
            <div className='footer'>(Finds the text of all elements on the website which match the searched tag)</div>
          </div>
          <TagFormContainer />
          <TagResultsContainer />
        </div>
        <div className='section-container shadow-border'>
          <div className='text-align-center'>
            <div className='header blue'>Text Checker</div>
            <div className='footer'>(Determines whether or not a website contains the searched text)</div>
          </div>
          <TextFormContainer />
          <TextResultsContainer />
        </div>
      </div>
    </Provider> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'));