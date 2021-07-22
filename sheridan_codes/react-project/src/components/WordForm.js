import React, { Component } from 'react'
import Thesaurus from './Thesaurus'

class WordForm extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            syns: '',
            ants: '',
            fl: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/thesaurus`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                syns: this.state.syns,
                ants: this.state.ants,
                fl: this.state.fl
            })
        }).then(res => res.json())
        .then(word => this.props.addWord(word))
    }

    changeWord = (wordObj) => {
        this.setState({
            id: wordObj.id,
            syns: wordObj.syns,
            ants: wordObj.ants,
            fl: wordObj.fl
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
            def: wordObj.def,
            syns: wordObj.syns,
            ants: wordObj.ants,
            fl: wordObj.fl          

        })
    }
}

export default WordForm 