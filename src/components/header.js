import React, { Component } from 'react';
import logo from '../assets/images/logo.jpg'

export default class MusicHead extends Component {
    render() {
        return (
            <div className='music-head'>
               <img src={logo} alt='音乐logo'/>
               <span>正在播放</span>
            </div>
        )
    }
}