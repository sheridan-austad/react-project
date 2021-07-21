import React, { Component } from 'react'
import Word from '../components/Word'
import NewWord from '../components/NewWord'

class Words extends Component {
    constructor(){
        super()
        this.state = {
            words: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/thesaurus`)
        .then(res => res.json())
        .then(words => this.setState({ words }))
    }

    render(){
        const words = this.state.words.map(word => <Word word={word}/>)

        return (
            <div>
                {Words}
                <NewWord/>
            </div>
        )
    }
}

export default Words