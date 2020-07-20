import React, { Component } from 'react'

class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.map(gif => { return <li key={gif.id}><img src={gif.images.original.url} /></li> })}
            </div>
        );
    }
}

export default GifList
