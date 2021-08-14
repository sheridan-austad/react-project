import React, { Component } from 'react'
import Word from '../components/Word'
import NewWord from '../components/NewWord'
import '../App.css'

class Words extends Component {    
   
    render(){
        const words = this.props.words.map(word => <Word word={word}/>)

        return (
            <div>
                {words}
                <NewWord/>
            </div>
        )
    }
}

export default Words