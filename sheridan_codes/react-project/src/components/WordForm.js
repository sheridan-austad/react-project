import React, { Component } from 'react'
import Thesaurus from './Thesaurus'


class WordForm extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault()
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
        .then(word => this.addNewWord(word))
    }
    
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    addNewWord = (data) => {
            this.setState({
                words: data
            })
        }
    render(){
        return(
            <div>
                <Thesaurus addNewWord={this.addNewWord}/>
                <form onSubmit={event => this.handleSubmit(event)}><br/>
                    <label>New Word:</label><br/>
                    <input type="text" name="word" onChange={event =>this.props.handleChange(event)}
                    value={this.props.words.word}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
    
}

export default WordForm 