import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import MusicBox from './page/MusicBox';
import Player from './page/player';
import MusicList from './page/music-list';

export default class Toot extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={MusicBox}>
                    <IndexRoute component={Player} />
                    <Route path="/list" component={MusicList}/>
                </Route>
            </Router>
        )
    }
}
