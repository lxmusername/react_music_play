import React, { Component } from 'react';
import './MusicBox.css';
import Root from '../components/root.js'

export default class MusicBox  extends Component {
  render() {
    return (
      <div className="music-box">
        <Root/>
      </div>
    );
  }
}
