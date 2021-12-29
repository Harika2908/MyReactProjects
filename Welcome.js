import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name , character} = this.props
        return (
            <div>
                <h1>{name} also known as {character}</h1>
            </div>
        )
    }
}

export default Welcome
