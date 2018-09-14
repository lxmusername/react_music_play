import React, { Component } from 'react';
import './MusicBox.css';
import { MUSIC_LIST } from '../../assets/music/music-list';


const $ = window.$;
export default class MusicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicItem:MUSIC_LIST[0],
      musicList:MUSIC_LIST
    }
  }
  componentDidMount() {
    let file = this.state.musicItem.file;
    //初始化 jplayer插件
    $('#player').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia', {
          mp3: file
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
  };
  render() {
    return (
      <div className='music-box'>
        {React.cloneElement(this.props.children,this.state)}
      </div>
    );
  }
}

