import React, { Component } from 'react';
import MusicItem from './music-item';
import './music-list.css'


export default class MusicList extends Component {
    render() {
        let musicEle = null;
        musicEle = this.props.musicList.map((item) => {
            return (
                <MusicItem
                    activeEle={item.id===this.props.musicItem.id}
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