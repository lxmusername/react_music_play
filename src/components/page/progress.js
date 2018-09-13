import React, { Component } from 'react';

export default class MusicProgress extends Component {
    constructor(props) {
        super(props)
        this.changeProgress = this.changeProgress.bind(this)
    }
    componentDidMount() {

    }
    changeProgress(e) {
        let progressBar = this.refs.progressBar;
        let curProgress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.changeProgress(curProgress);
    }
    render() {
        const progress = Math.ceil(this.props.progress / this.props.progressDuration * 100);
        const curPro = Math.ceil(this.props.progress);
        return (
            <div className='music-progress' onClick={this.changeProgress} ref='progressBar'>
                <div className='progress' style={{ width: `${progress}%`,background:this.props.bgColor }}></div>
            </div>
        );
    }
}