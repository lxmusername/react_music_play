import React, { Component } from 'react';
import MusicProgress from './progress';
import './player.css'
const $ = window.$;
let progressDuration = null;

// player的控制组件
export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            bgColor:'#690303'
        }
    }
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            progressDuration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentTime
            });
        })
    }
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate)
    }
    changeProgress(curProgress) {
        $('#player').jPlayer('play', progressDuration * curProgress);
    }
    render() {
        return (
            <div className="music-box">
                <MusicProgress
                    bgColor={this.state.bgColor}
                    progress={this.state.progress}
                    progressDuration={progressDuration}
                    changeProgress={this.changeProgress} />
            </div>
        );
    }
}