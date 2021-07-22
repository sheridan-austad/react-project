import React, { Component } from 'react'

class Thesaurus extends Component {

    constructor(){
        super()
        this.state = {
            def: '',
            syns: '',
            ants: '',
            fl: ''
        }
    }

    componentDidMount(){
        this.fetchWord()
    }

    fetchWord = () => {
        fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=f5f794bc-a89d-4af7-8f68-182f398f3e91`)
        .then(res => res.json())
        .then(data => {
            const wordObj = data[0]
            this.setState({
                definition: wordObj.def,
                synonyms: wordObj.syns,
                antonyms: wordObj.ants,
                partsOfSpeech: wordObj.fl
            })
            this.props.changeWord(wordObj)
        })
    }

    render(){
        return(
            <div>
                <h1> Word Thesaurus {this.state.thesaurus}</h1>
                <h3>Definition: {this.state.def}</h3>
                <h3>Synonyms: {this.state.syns}</h3>
                <h3>Antonyms: {this.state.ants}</h3>
                <h3>Part of Speech: {this.state.fl}</h3>
                <button onClick={this.fetchWord}>Try a different word!</button>
            </div>
        )
    }
}

export default Thesaurus