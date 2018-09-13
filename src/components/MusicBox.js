import React, { Component } from 'react';
import './MusicBox.css';
import MusicHead from './page/header';
import Player from './page/player';
const $=window.$;


export default class MusicBox extends Component {
  componentDidMount() {
    //初始化 jplayer插件
    $('#player').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia', {
          mp3: require('../assets/music/1.mp3')
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
  }

  render() {
    return (
      <div className="music-box">
        <MusicHead />
        <Player />
      </div>
    );
  }
}
