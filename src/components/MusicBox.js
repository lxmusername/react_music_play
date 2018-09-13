import React, { Component } from 'react';
import './MusicBox.css';
import MusicHead from './header.js';
import MusicProgress from './progress.js';
const $=window.$;

export default class MusicBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: '-'
    }
  }
  componentDidMount() {
    let src=require('../assets/music/1.mp3')
    $('#play').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia', {
          mp3: src
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
    $('#play').bind($.jPlayer.event.timeupdate, (e) => {
      this.setState({
        progress: Math.random(e.jPlayer.status.currentTime)
      });
    });
  }
  componentWillUnmount(){
    $('#play').unbind($.jPlayer.event.timeupdate)
  }

  render() {
    return (
      <div className="music-box">
        <MusicHead />
        <MusicProgress progress={this.state.progress} />
      </div>
    );
  }
}
