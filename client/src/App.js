import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';



class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path = "/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
