import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Words from './containers/Words'
import WordForm from './components/WordForm'

function App() {
  return (
      <Router>
    <div className="App">
      {/* allows the navbar to be available everywhere */}
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/words' component={Words}/>
        <Route exact path='/words/new' component={WordForm}/>
      </Switch>


    </div>
    </Router>
  );
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