import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'lightblue'
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/Words"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'lightblue'
                    }}
                >
                    Words
                </NavLink>
            </div>
        )
    }
}

export default NavBar