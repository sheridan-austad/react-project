import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'darkgrey',
    textDecoration: 'none',
    color: 'white'
}
// creating the navbar

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/Words"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    Words
                </NavLink>
                <NavLink
                    to="/SavedWords"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    SavedWords
                </NavLink>
            </div>
        )
        // putting in the links
    }
}

export default NavBar