import React, { Component } from 'react'
import Word from '../components/Word'
import NewWord from '../components/NewWord'
import '../App.css'

class Words extends Component {    
    // add json stringify - DONE!
    // constructor(){
    //     super()
    //     this.state = {
    //         words: []
    //     }
    // }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/word`)
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             words: data
    //     })
    //     })
    // }
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