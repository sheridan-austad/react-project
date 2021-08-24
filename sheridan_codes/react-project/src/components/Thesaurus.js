import React, { Component } from 'react'

class Thesaurus extends Component {

    constructor() {
        super()
        this.state = {
            word: '',
            definition: '',
            partOfSpeech: '',
            synonyms: ''
        }
    }

    componentDidMount() {
        this.fetchWord()
    }

    fetchWord = () => {
        this.props.handleResetWord()
        fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6d66cea463msh35492d29c84f385p1a1ea9jsn8568cdf82ecf",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(data => {
               
                this.setState({
                    word: data.word,
                    description: data.results ? data.results[0].definition : "",
                    partOfSpeech: data.results ? data.results[0].partOfSpeech : "",
                    synonyms: data.results ? data.results[0].synonyms[0] : ""
                })
            })

        
}

render(){
    return (
        <div>
            {this.props.changedWord ? 
                <div>
                    <br />
            <h3>Word: {this.props.changedWord.word}</h3>
            <h3>Definition: {this.props.changedWord.results[0].definition}</h3>
            <h3>Parts of Speech: {this.props.changedWord.results[0].partOfSpeech}</h3>
            <h3>Synonyms: {this.props.changedWord.results[0].synonyms ? this.props.changedWord.results[0].synonyms[0] : ""}</h3><br />
                </div>
            : 
            <div>
                <br />
            <h3>Word: {this.state.word}</h3>
            <h3>Definition: {this.state.definition}</h3>
            <h3>Parts of Speech: {this.state.partOfSpeech}</h3>
            <h3>Synonyms: {this.state.synonyms}</h3><br />

            </div>}
            <button onClick={this.fetchWord}>Try a different word!</button>
        </div>
    )
}
}

export default Thesaurus