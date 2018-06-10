import React from 'react';
import axios from 'axios';
import * as types from '../actions/crawlActions'

class TagForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url: 'https://cobalt.io/',
      tag: 'h1'
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
    axios.get('/tag', {
      params: {
        url: this.state.url,
        tag: this.state.tag,
      }
    }).then((response) => {
      this.props.dispatch(types.setTagMatches(response.data))
    })
  }

  render() {
    return (
      <div>
        website: <input type='text' name='website' value={this.state.website} onChange={this.handleChange}/>
        tag: <input type='test' name='tag' value={this.state.tag} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
};

export default TagForm