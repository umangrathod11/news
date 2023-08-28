import './App.css';
import React, { Component } from 'react'
import News from './News';
export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>
        <News/>
     
      </div>
    )
  }
}
