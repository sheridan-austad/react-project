import React, { Component } from 'react'

class Word extends Component {
    render(){
        return (
            <div>
                {this.props.word.definition}
            </div>
        )
    }
}

export default Word