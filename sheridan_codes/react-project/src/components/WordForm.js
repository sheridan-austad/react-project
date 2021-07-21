import React, { Component } from 'react'
import Thesaurus from './Thesaurus'

class WordForm extends Component {
    constructor(){
        super()
        this.state = {
            word: '',
            synonyms: '',
            antonyms: '',
            examples: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    changeWord = (wordObj) => {
        this.setState({
            word: wordObj.word,
            synonyms: wordObj.synonyms,
            antonyms: wordObj.antonyms
        })
    }

    render(){
        return(
            <div>
                <Thesaurus changeWord={this.changeWord}/>
                <form onSubmit={this.handleSubmit}>
                    <label>Word</label><br/>
                    <input type="text" name="word" onChange={this.handleChange}/><br/>
                    {/* <label>Synonyms</label><br/>
                    <textarea type="text" name="synonyms" onChange={this.handleChange}/><br/>
                    <label>Examples</label><br/>
                    <textarea type="text" name="examples" onChange={this.handleChange}/><br/> */}
                    <input type="submit"/>
                </form>
            </div>
        )
    }
    
    changeWord = (wordObj) => {
        this.setState({
            word: wordObj.word,
            synonyms: wordObj.synonyms,
            antonyms: wordObj.antonyms,
            examples: wordObj.examples            

        })
    }
}

export default WordForm 