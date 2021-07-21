import React, { Component } from 'react'

class Thesaurus extends Component {

    constructor(){
        super()
        this.state = {
            word: '',
            synonyms: '',
            antonyms: '',
            examples: ''
        }
    }

    componentDidMount(){
        this.fetchWord()
    }

    fetchWord = () => {
        fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=f5f794bc-a89d-4af7-8f68-182f398f3e91`)
        .then(res => res.json())
        .then(data => {
            const wordObject = data[0]
            this.setState({
                word: wordObject.word,
                synonyms: wordObject.synonyms,
                antonyms: wordObject.antonyms,
                examples: wordObject.examples
            })
            this.props.changeWord(wordObject)
        })
    }

    render(){
        return(
            <div>
                <h1> Word Thesaurus {this.state.thesaurus}</h1>
                <h3>Synonyms: {this.state.synonyms}</h3>
                <h3>Antonyms: {this.state.antonyms}</h3>
                <h3>Examples: {this.state.examples}</h3>
                <button onClick={this.fetchWord}>Try a different word!</button>
            </div>
        )
    }
}

export default Thesaurus