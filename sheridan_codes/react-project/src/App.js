import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Words from './containers/Words'
import WordForm from './components/WordForm'
import { Component } from 'react'


  class App extends Component {
    
    constructor(){
      super()
      this.state = {
          words: []
      }
  }

  componentDidMount(){
      fetch(`http://localhost:3000/word`)
      .then(res => res.json())
      .then(data => {
          this.setState({
              words: data
      })
      })
  }

  addNewWord = (words) => {
    this.setState({
      words: [...this.state.words, words]
    })
    fetch(`http://localhost:3000/word`, {
            method: 'POST',
            headers: {
                'Content-type': 'applicationCache/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                words: this.state.words,
                definition: this.state.definition,
                partOfSpeech: this.state.partOfSpeech,
                synonyms: this.state.synonyms
            })
        }).then(res => res.json())
        .then(word => this.addNewWord(word))
  }

  render(){
    return(
      <Router>
    <div className="App">
      {/* allows the navbar to be available everywhere */}
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/words' render={() => <Words words={this.state.words}/>}/>
        <Route exact path='/words/new' render={() => <WordForm addNewWord={this.addNewWord}/>}/>
      </Switch>


    </div>
    </Router>
  );
  }
  }
export default App;

// Use the create-react-app generator to start your project.
// Follow the instructions on this repo to setup the generator: create-react-app (Links to an external site.)
// Your app should have one HTML page to render your react application
// Your app should use multiple components in a way that keeps your code well organized.
// There should be 3 routes
// The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs (Links to an external site.); docs for v4 can be found here (Links to an external site.))

// Your app must incorporate API data. This data can be from a public API or from a GitHub JSON file you create

// Your app must persist some data using a JSON server as a mock up backend

// Your application should have some minimal styling: feel free to incorporate a UI framework (like react-bootstrap (Links to an external site.) or material-ui (Links to an external site.)), but if you want to write CSS yourself, go for it!