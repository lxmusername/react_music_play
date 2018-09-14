import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import MusicBox from '../components/page/MusicBox';
import Player from '../components/page/player';
import MusicList from '../components/page/music-list';


//react-router4 路由单独使用一个组件  （否则会出现路由不跳转bug）
export default class Root extends Component {
    render() {
        return (
            <HashRouter>
                <MusicBox>
                    <Switch>
                        <Route exact path="/" component={Player} />
                        <Route path="/list" component={MusicList} />
                    </Switch>
                </MusicBox>
            </HashRouter>
        )
    }
}
