import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import SavedWords from './containers/SavedWords'
import WordsContainer from './containers/WordsContainer'
import { Component } from 'react'
// importing anything

  class App extends Component {
    // creating a class component
    // container component - not doing any functionality, just containing other components

  render(){
    return(
      <Router>
    <div className="App">
      {/* allows the navbar to be available everywhere */}
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/SavedWords' render={() => <SavedWords/>}/>
        <Route exact path='/Words' render={() => <WordsContainer/>}/>
      </Switch>
{/* creating routes to the different pages */}

    </div>
    </Router>
  );
  }
  }
export default App;