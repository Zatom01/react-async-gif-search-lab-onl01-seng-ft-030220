import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        images: []
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=riER3KT7hAB73w2mJoI41zTQy4dksj3T&rating=g")
            .then(resp => resp.json())
            .then(results => {
                this.setState({
                    images: results.data.slice(0, 3)
                })
            })
    }

    handleSubmit = (event, search) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=riER3KT7hAB73w2mJoI41zTQy4dksj3T&rating=g`)
            .then(resp => resp.json())
            .then(results => {
                this.setState({
                    images: results.data.slice(0, 3)
                })
            })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.images} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        );
    }

}

export default GifListContainer
