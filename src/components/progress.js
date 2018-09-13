import React, { Component } from 'react';

export default class MusicProgress extends Component {
    
    render() {
        return (
            <div id='play'>
                {this.props.progress}s
            </div>
        )
    }
}