import React, { Component } from 'react'
import WordForm from '../components/WordForm';
import Thesaurus from '../components/Thesaurus';

class WordsContainer extends Component {
    state = {
        word: null
    }


    componentDidMount() {
        this.fetchRandomWord()
    }

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
                <Thesaurus word={this.state.word} fetchRandomWord={this.fetchRandomWord}/>
                <WordForm fetchFormWord={this.fetchFormWord}/>
            </div>
        )
    }
}

export default WordsContainer;