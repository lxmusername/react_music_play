import React, { Component } from 'react';
import './MusicBox.css';
import MusicHead from './page/header';
// import Player from './page/player';
import { MUSIC_LIST } from '../assets/music/music-list';
import MusicList from './page/music-list'


const $ = window.$;
export default class MusicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList:MUSIC_LIST,
      musicItem: MUSIC_LIST[2],
    }
  }
  componentDidMount() {
    //初始化 jplayer插件
    $('#player').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia', {
          mp3: require('../assets/music/1.mp3')
        }).jPlayer('pause');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
  }

  render() {
    return (
      <div className="music-box">
        <MusicHead />
        <MusicList
          musicList={this.state.musicList}
          musicItem={this.state.musicItem}
          />
        {/* <Player musicItem={this.state.musicItem}/> */}
      </div>
    );
  }
}
