import React, { Component } from 'react'
import Thesaurus from './Thesaurus'


class WordForm extends Component {
    state = {
        word: '',
        changedWord: null
    }
    handleWordChange = (e) => {
        this.setState({
            word: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.word}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6d66cea463msh35492d29c84f385p1a1ea9jsn8568cdf82ecf",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(json => 
      {this.setState({
        changedWord: json
      })})
    }

    addNewWord = (data) => {
            this.setState({
                word: data
            })
        }
    render(){
        return(
            <div>
                <Thesaurus addNewWord={this.addNewWord} changedWord={this.state.changedWord}/>
                <form onSubmit={event => this.handleSubmit(event)}><br/>
                    <label>New Word:</label><br/>
                    <input type="text" name="word" onChange={event => this.handleWordChange(event)}
                    value={this.state.words}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
    
}

export default WordForm 