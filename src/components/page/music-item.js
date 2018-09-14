import React, { Component } from 'react';
import Pubsub from 'pubsub-js';

export default class MusicItem extends Component {
    delMusic(item,e) {
        e.stopPropagation();
        Pubsub.publish('DEL_MUSIC', item)
    }
    playMusic(item) {
        console.log(item)
        Pubsub.publish('PLAY_MUSIC', item)
    }
    render() {
        let { item, activeEle } = this.props;
        return (
            <li
                onClick={this.playMusic.bind(this, item)}
                className={activeEle ? 'active-item' : ''}>
                <strong>{item.title}</strong>
                <span>----{item.artist}</span>
                <span className='item-del' onClick={this.delMusic.bind(this, item)}>x</span>
            </li>
        )
    }
}