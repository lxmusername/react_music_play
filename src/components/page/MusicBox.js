import React, { Component } from 'react';
import './MusicBox.css';
import MusicHead from './header';
import Player from './player';
// import { MUSIC_LIST } from '../../assets/music/music-list';
import MusicList from './music-list';
import { Switch, Redirect, Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { BrowserRouter, Link,HashRouter } from 'react-router-dom';

const $ = window.$;
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     musicList: MUSIC_LIST,
  //     musicItem: MUSIC_LIST[1],
  //   }
  // };
  componentDidMount() {
    // let file = this.state.musicItem.file;
    // //初始化 jplayer插件
    // $('#player').jPlayer({
    //   ready: function () {
    //     $(this).jPlayer('setMedia', {
    //       mp3: file
    //     }).jPlayer('play');
    //   },
    //   supplied: 'mp3',
    //   wmode: 'window'
    // });
  };
  render() {
    return (
      <div className="music-box">
        <MusicHead />
        {
          this.props.children 
        }
      </div>
    );
  };
}

export default class MusicBox extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/' component={Player} />
            <Route path="/list" component={MusicList} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

