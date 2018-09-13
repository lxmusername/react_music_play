import React, { Component } from 'react';
import MusicProgress from './progress';
import './player.css'



const $ = window.$;
let progressDuration = 0;

// player的控制组件
export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,//播放进度
            volume: 0,//音量 
            isPlay:false,//是否正在播放
        }
        this.play=this.play.bind(this);
    }
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            progressDuration = e.jPlayer.status.duration;
            this.setState({
                volume:e.jPlayer.options.volume,
                progress: e.jPlayer.status.currentTime
            });
        })
    }
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate)
    }
    //改变播放进度
    changeProgress(curProgress) {
        console.log('play:',curProgress)
        $('#player').jPlayer('play', progressDuration * curProgress);
    }
    // 改变播放音量
    changeVolumn(curProgress) {
        console.log('volume:',curProgress)
        $('#player').jPlayer('volume',curProgress);
    }
    // 是否播放
    play(){
        this.state.isPlay&&$('#player').jPlayer('pause');
        !this.state.isPlay&&$('#player').jPlayer('play');
        this.setState({
            isPlay:!this.state.isPlay
        })
    }
    render() {
        return (
            <div className="player-box">
                <h6>我的音乐坊...</h6>
                <div style={{ 'overflow': 'hidden' }}>
                    <div className='music-msg'>
                        <h4>歌曲名字: 《 {this.props.musicItem.title} 》 </h4>
                        <h6>歌曲作者: {this.props.musicItem.artist}</h6>
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
                        <img src={this.props.musicItem.cover} />
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
                    <span className={this.state.isPlay?'pause-btn':'begin-btn'} onClick={this.play}></span>
                    <span></span>
                   <img src={require('../../assets/images/round.png')}/>
                </div>
            </div>
        );
    }
}