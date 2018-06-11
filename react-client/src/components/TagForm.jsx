import React from 'react';
import axios from 'axios';
import * as types from '../actions/crawlActions'

class TagForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url: '',
      tag: ''
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    const prop = e.target.name;
    const val = e.target.value;
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
      <div className='section-container border-black'>
        <div className='display-flex line'>
          <div className='form-description'>
            Paste Desired Website URL:
          </div>
            <input type='text' name='website' value={this.state.url} placeholder='https://cobalt.io/' onChange={this.handleChange}/>
        </div>
        <div className='display-flex line'>
          <div className='form-description'>
            Desired Tag to be Searched:
          </div>
            <input type='text' name='tag' value={this.state.tag} placeholder='h1'onChange={this.handleChange}/>
        </div>
        <div className='center line'>
          <button className='submit-button' onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
};

export default TagForm