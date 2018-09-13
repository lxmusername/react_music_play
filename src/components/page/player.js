import React, { Component } from 'react';
import MusicProgress from './progress';
import './player.css';
import { MUSIC_LIST } from '../../assets/music/music-list';
import {Link} from 'react-router-dom';



const $ = window.$;
let progressDuration = 0;

// player的控制组件
export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,//播放进度
            volume: 0,//音量 
            isPlay: true,//是否正在播放
            musicList: MUSIC_LIST,
            musicItem: MUSIC_LIST[1],
        }
        this.play = this.play.bind(this);
        console.log(this.props)
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

        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            progressDuration = e.jPlayer.status.duration;
            this.setState({
                volume: e.jPlayer.options.volume,
                progress: e.jPlayer.status.currentTime
            });
        })
    }
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate)
    }
    //改变播放进度
    changeProgress(curProgress) {
        console.log('play:', curProgress)
        $('#player').jPlayer('play', progressDuration * curProgress);
    }
    // 改变播放音量
    changeVolumn(curProgress) {
        console.log('volume:', curProgress)
        $('#player').jPlayer('volume', curProgress);
    }
    // 是否播放
    play() {
        this.state.isPlay && $('#player').jPlayer('pause');
        !this.state.isPlay && $('#player').jPlayer('play');
        this.setState({
            isPlay: !this.state.isPlay
        })
    }
    render() {
        return (
            <div className="player-box">
                <h6> <Link to='/list'>我的音乐坊...</Link></h6>
                <div style={{ 'overflow': 'hidden' }}>
                    <div className='music-msg'>
                        <h4>歌曲名字: 《 {this.state.musicItem.title} 》 </h4>
                        <h6>歌曲作者: {this.state.musicItem.artist}</h6>
                        <div className='play-voice'>
                            <span>{Math.ceil(progressDuration)}</span>
                            <span>vol:</span>
                            <MusicProgress
                                progressHeight='3px'
                                bgColor='#0ff'
                                progress={this.state.volume}
                                progressDuration='1'
                                changeProgress={this.changeVolumn} />
                        </div>
                    </div>
                    <div className='music-logo'>
                        <img src={this.state.musicItem.cover} />
                    </div>
                </div>
                <div className='player-progress'>
                    <MusicProgress
                        bgColor={this.state.bgColor}
                        progress={this.state.progress}
                        progressDuration={progressDuration}
                        changeProgress={this.changeProgress} />
                </div>
                <div className='player-controller'>
                    <span></span>
                    <span className={this.state.isPlay ? 'pause-btn' : 'begin-btn'} onClick={this.play}></span>
                    <span></span>
                    <img src={require('../../assets/images/round.png')} />
                </div>
            </div>
        );
    }
}