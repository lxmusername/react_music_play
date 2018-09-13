import React, { Component } from 'react';
import  imgLogo from '../../assets/images/logo.jpg'
export default class MusicHead extends Component {
    componentWillMount(){
        
    }
    render() {
        return (
            <div className='music-head'>
               <img src={imgLogo} alt='音乐logo'/>
               <span>音乐播放器React Music Player</span>
            </div>
        )
    }
}