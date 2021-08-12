import React, { Component } from 'react'
import Thesaurus from './Thesaurus'


class WordForm extends Component {
    
    // state= {
    //     words: '',
    //     definition: '',
    //     partOfSpeech: '',
    //     synonyms: ''
    // }
    constructor(props){
        super(props)
        this.state = {
            words: '',
            definition: '',
            partOfSpeech: '',
            synonyms: ''
         }
    }
// go over how to write a form
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewWord(this.state)
        // not reading the preventdefault
        
    }

    changeWord = (data) => {
        this.setState({
            words: data
        })
    }

    render(){
        return(
            <div>
                <Thesaurus changeWord={this.changeWord}/>
                <form onSubmit={this.handleSubmit}>
                    <label>Word</label><br/>
                    <input type="text" name="word" value={this.state.word} onChange={this.handleChange}/><br/>
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