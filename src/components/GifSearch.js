import React from 'react';

class GifSearch extends React.Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.search)}>
                    <input type='text' name="search" onChange={(e) => this.handleChange(e)} />
                </form>
            </div>
        );
    }
}

export default GifSearch;
