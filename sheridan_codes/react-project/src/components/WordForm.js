import React, { Component } from 'react'
// import Thesaurus from './Thesaurus'


class WordForm extends Component {
    state = {
        word: ''
    }

    handleWordChange = (e) => {
        this.setState({
            word: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchFormWord(this.state.word)       
    }

    render(){
        return(
            <div>
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