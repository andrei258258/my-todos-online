import React, {Component} from 'react';
import Todos from './components/Todos.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import { BrowserRouter,  Route, Switch  } from 'react-router-dom'

class App extends Component {


  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="page-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/:friendlyLink" component={Todos} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
