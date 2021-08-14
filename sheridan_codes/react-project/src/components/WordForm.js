import React, { Component } from 'react'
import Thesaurus from './Thesaurus'


class WordForm extends Component {
    state = {
        word: ''
    }
    handleWordChange = (e) => {
        this.setState({
            word: e.target.value
        })
    }
    
    // listOfSubmissions = () => {
    //     return this.state.word.map(data => {
    //       return <div><span>{data.word}</span> </div>
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        // let formData = { word: this.state.word }
        // let dataArray = this.state.word.concat(formData)
        // this.setState({word: dataArray})

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
                word: data
            })
        }
    render(){
        return(
            <div>
                <Thesaurus addNewWord={this.addNewWord}/>
                <form onSubmit={event => this.handleSubmit(event)}><br/>
                    <label>New Word:</label><br/>
                    <input type="text" name="word" onChange={event =>this.handleWordChange(event)}
                    value={this.state.words}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
                {/* {this.listOfSubmissions(word)} */}
            </div>
        )
    }
    
}

export default WordForm 