import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail'
import CountryView from './components/CountryView'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <div className="App">
              <div className="row">
                <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                  <CountryDetail />
                </div>
                <div className="col-7">
                  <Switch>
                    <Route exact path="/:id" component={CountryView} />
                  </Switch>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
