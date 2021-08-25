import React, { Component } from 'react'
import WordForm from '../components/WordForm';
import Thesaurus from '../components/Thesaurus';

class WordsContainer extends Component {
    state = {
        word: null
    }
    // setting state to word - setting that to null
   
    componentDidMount() {
        this.fetchRandomWord()
    }
    // compnent life cycle - user seeing something and not just a blank page

    fetchRandomWord = () => {
        // this.props.handleResetWord()
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
                    word: data
                })
            })
    }
    // fetching the API - 

    saveWord = () => {
        fetch(`http://localhost:3000/word`, {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(
                this.state.word
              )
            })
    }
    
    fetchFormWord = (word) => {
        // this.props.handleResetWord()
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6d66cea463msh35492d29c84f385p1a1ea9jsn8568cdf82ecf",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(json => 
      {this.setState({
        word: json
      })})
    }
    
    render() {
        return (
            <div>
                <Thesaurus word={this.state.word} fetchRandomWord={this.fetchRandomWord} saveWord={this.saveWord}/>
                <WordForm fetchFormWord={this.fetchFormWord}/>
            </div>
        )
    }
}

export default WordsContainer;