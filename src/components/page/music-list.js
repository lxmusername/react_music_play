import React, { Component } from 'react';
import MusicItem from './music-item';
import './music-list.css';
import { MUSIC_LIST } from '../../assets/music/music-list';
import Pubsub from 'pubsub-js';

export default class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicList: MUSIC_LIST,
            musicItem: MUSIC_LIST[1]
        }
    }
    componentDidMount() {

        //事件绑定
        Pubsub.subscribe('DEL_MUSIC', (msg, item) => {
            this.setState({
                musicList: this.state.musicList.filter(music => {
                    return music !== item;
                })
            })
        });

        Pubsub.subscribe('PLAY_MUSIC', (msg, item) => {
            this.setState({
                musicItem:item
            })
        })
    }
    componentWillUnmount() {
        //事件解绑
        Pubsub.unsubscribe('DEL_MUSIC')
        Pubsub.unsubscribe('PLAY_MUSIC')
    }
    render() {
        let musicEle = null;
        musicEle = this.state.musicList.map((item) => {
            return (
                <MusicItem
                    activeEle={item.id === this.state.musicItem.id}
                    key={item.id}
                    item={item}
                />
            );
        });
        return (
            <ul>
                {musicEle}
            </ul>
        )
    }
}