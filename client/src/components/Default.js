import React, { Component } from 'react';
import axios from 'axios';

class Default extends Component{
  constructor(props){
    super(props);
    this.state = {}
  };

  componentDidMount(){}

  render(){
    return(
      <div>
        <h2>Default Component</h2>
      </div>
    )
  }
}

export default Default;
