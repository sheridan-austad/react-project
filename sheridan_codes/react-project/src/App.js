import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import SavedWords from './containers/SavedWords'
import WordsContainer from './containers/WordsContainer'
import { Component } from 'react'


  class App extends Component {
    
    constructor(){
      super()
      this.state = {
          words: []
      }
  }

  // componentDidMount(){
  //     fetch(`http://localhost:3000/word`)
  //     .then(res => res.json())
  //     .then(data => {
  //         this.setState({
  //             words: data
  //     })
  //     })
  // }

  addNewWord = (word) => {
    this.setState({
      words: [...this.state.words, word]
    })
  }

  render(){
    return(
      <Router>
    <div className="App">
      <form
        handleWordChange={this.props.state}
        addNewWord={this.props.addNewWord}
        />
      {/* allows the navbar to be available everywhere */}
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/SavedWords' render={() => <SavedWords words={this.state.words}/>}/>
        <Route exact path='/Words' render={() => <WordsContainer/>}/>
      </Switch>


    </div>
    </Router>
  );
  }
  }
export default App;