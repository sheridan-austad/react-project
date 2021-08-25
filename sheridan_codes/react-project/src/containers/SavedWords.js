import React, { Component } from 'react'
import '../App.css'
import WordDisplay from '../components/WordDisplay'

class SavedWords extends Component {
    constructor() {
        super()
        this.state = {
            savedWords: null
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/word`)
            .then(res => res.json())
            .then(data => {
                this.setState({ savedWords: data })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.savedWords ?

                        this.state.savedWords.map(word => {
                            return (
                                <>
                                    <WordDisplay word={word} />
                                    <hr />
                                </>
                            )
                        })
                        :
                        null

                }

            </div>
        )
    }
}

export default SavedWords