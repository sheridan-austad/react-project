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
        this.fetchWord("hello")
    }
// instead of word - this.props.word
// write down parents and children - like a tree
    fetchWord = () => {
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.props.word}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6d66cea463msh35492d29c84f385p1a1ea9jsn8568cdf82ecf",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            // .then(data => {data})
    }
// set state for after fetch
// check data before setting state



        // fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=f5f794bc-a89d-4af7-8f68-182f398f3e91`)
    //     .then(res => res.json())
    //     .then(data => {
    //         const wordStorage = data[0]
    //         this.setState({
    //             hw : wordStorage.hwi.hw ,
    //             shortdef: wordStorage.shortdef,
    //             fl: wordStorage.fl,
    //             syns: wordStorage.syns
    //         })
    //         this.props.changeWord(data)
    //     })
    // }

render(){
    return (
        <div><br />
            <h3>Word: {this.state.word}</h3>
            <h3>Definition: {this.state.definition}</h3>
            <h3>Parts of Speech: {this.state.partOfSpeech}</h3>
            <h3>Synonyms: {this.state.synonyms}</h3><br />
            <button onClick={this.fetchWord}>Try a different word!</button>
        </div>
    )
}
}

export default Thesaurus