import React, { Component } from 'react'
import WordDisplay from './WordDisplay'

class Thesaurus extends Component {

    render() {
        return (
            <div>
                {this.props.word ?
                    <WordDisplay word={this.props.word}/>
                    :
                    null
                }

                <button onClick={this.props.fetchRandomWord}>Try a different word!</button><br/>
                <button onClick={this.props.saveWord}>Save Word!</button>
            </div>
        )
    }
}

export default Thesaurus