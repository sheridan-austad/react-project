import React, { Component } from 'react'
import Word from '../components/Word'
import NewWord from '../components/NewWord'

class Words extends Component {

    render(){
        const words = this.props.words.map(words => <Word words={words}/>)

        return (
            <div>
                {words}
                <NewWord/>
            </div>
        )
    }
}

export default Words