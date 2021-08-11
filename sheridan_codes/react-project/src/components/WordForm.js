import React, { Component } from 'react'
import Thesaurus from './Thesaurus'


class WordForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            words: this.props.word
         }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // not reading the preventdefault
        fetch(`http://localhost:3000/word`, {
            method: 'POST',
            headers: {
                'Content-type': 'applicationCache/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                word: this.state.word,
                definition: this.state.definition,
                partOfSpeech: this.state.partOfSpeech,
                synonyms: this.state.synonyms
            })
        }).then(res => res.json())
        .then(word => this.state.addNewWord(word))
    }

    changeWord = (data) => {
        this.setState({
            words: data
        })
    }

    render(){
        return(
            <div>
                <Thesaurus changeWord={this.state.changeWord}/>
                <form onSubmit={this.state.handleSubmit}>
                    <label>Word</label><br/>
                    <input type="text" name="word" onChange={this.state.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
    // link wordform to thesaurus
    // put event listener on text box so when typed - when submitted will fetch
    // data to be placed on browser
    // persist json - fetch request to json - DONE!
    
    changeWord = (data) => {
        this.setState({
            words: data    

        })
    }
}

export default WordForm 