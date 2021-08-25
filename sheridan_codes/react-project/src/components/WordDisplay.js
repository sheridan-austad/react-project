import React, { Component } from 'react'

class WordDisplay extends Component {

    render() {
        return (
            <div>
                <br />
                <h3>Word: {this.props.word.word}</h3>
                <h3>Definition: {this.props.word.results ? this.props.word.results[0].definition : ""}</h3>
                <h3>Parts of Speech: {this.props.word.results ? this.props.word.results[0].partOfSpeech : ""}</h3>
                <h3>Synonyms: {this.props.word.results && this.props.word.results[0].synonyms ? this.props.word.results[0].synonyms[0] : ""}</h3>
            </div>
        )
    }
}

export default WordDisplay