import React, { Component } from 'react'


class Word extends Component {
    constructor() {
        super()
        this.setState(prevState => ({
            check: !prevState.check
          }));
        }
        
        
    render(){
       return (
    <div className="row">
      {this.props.word.word === 'truthy' ? (
       <div className="alert alert-danger" role="alert">
         Something went wrong
       </div>
      ) : null}
    </div>
        )
    }
}

export default Word

// state inside here for visible - bulean
// tercherary operarator that only shows if true
// when click word word come - passing down word to thesaurus
// then fetch this.props.word in thesaurus
