import React, { Component } from 'react';
import './MusicBox.css';
import MusicHead from './header';
import Player from './player';
import { MUSIC_LIST } from '../../assets/music/music-list';
import MusicList from './music-list';
import { Route, Router } from 'react-router';

const $ = window.$;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: MUSIC_LIST,
      musicItem: MUSIC_LIST[2],
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
  }

  render() {
    return (
      <div className="music-box">
        <MusicHead />
        {
          React.cloneElement(this.props.children, this.state)
        }
        {/* <MusicList
          musicList={this.state.musicList}
          musicItem={this.state.musicItem}
          /> */}
        {/* <Player musicItem={this.state.musicItem}/> */}
      </div>
    );
  }
}


export default class MusicBox extends Component {
  render() {
    return (
      <Router >
        <Route path='/' component={App}>
          <Route path='/player' component={Player} />
          <Route path="/list" component={MusicList} />
        </Route>
      </Router>
    )
  }
}