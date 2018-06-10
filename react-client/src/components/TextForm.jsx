import React from 'react';
import axios from 'axios';
import * as types from '../actions/crawlActions'

class TextForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url: 'www.cobalt.io',
      text: 'Customer First'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    const prop = e.target.name;
    const val = e.target.val;
    this.setState({
      [prop]: val,
    })
  }

  handleClick(){
    axios.get('/text', {
      params: {
        url: this.state.url,
        text: this.state.text,
      }
    }).then((response) => {
      this.props.dispatch(types.setTextFound(response.data.exists))
    })
  }

  render() {
    return (
      <div>
        website: <input type='text' name='website' value={this.state.website} onChange={this.handleChange}/>
        text: <input type='test' name='text' value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
};

export default TextForm;