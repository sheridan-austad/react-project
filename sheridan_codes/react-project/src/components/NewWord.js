import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NewWord extends Component {
    render(){
        return (
            <Link to={'/words/new'}>
                <button>Click me for a new word!</button>
            </Link>
        )
    }

}

export default NewWord