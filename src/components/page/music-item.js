import React, { Component } from 'react';

export default class MusicItem extends Component {
    render() {
        let {item,activeEle}=this.props;
        return (
            <li  className={activeEle?'active-item':''}>
                <strong>{item.title}</strong>
                <span>----{item.artist}</span>
                <span className='item-del'>x</span>
            </li>
        )
    }
}