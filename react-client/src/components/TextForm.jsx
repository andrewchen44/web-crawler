import React from 'react';
import axios from 'axios';
import * as types from '../actions/crawlActions'

class TextForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      enpoint: '',
      tag: '',
      text: ''
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
    axios.get('/contains', {
      params: {
        endpoint: this.state.enpoint,
        tag: this.state.tag,
        text: this.state.text,
      }
    }).then((response) => {
      this.props.dispatch(types.setTextFound(response.data.exists))
    })
  }

  render() {
    return (
    <div className='section-container border-black'>
        <div className='display-flex line'>
          <div className='form-description'>
            Paste Desired Website enpoint:
          </div>
          <input type='text' name='enpoint' value={this.state.enpoint} onChange={this.handleChange}
          placeholder='https://cobalt.io/'/>
        </div>
        <div className='display-flex line'>
          <div className='form-description'>
            Desired Tag to be Searched:
          </div>
          <input type='text' name='tag' value={this.state.tag} onChange={this.handleChange}
          placeholder='h1'/>
        </div>
        <div className='display-flex line'>
          <div className='form-description'>
            Desired Text to be Searched:
          </div>
          <input type='text' name='text' value={this.state.text} 
          placeholder='Pen Testing as a Service' 
          onChange={this.handleChange}/>
        </div> 
        <div className='center'>
         <button className='submit-button' onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
};

export default TextForm;