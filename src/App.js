import logo from './logo.svg'
import './App.scss';
import MainRoutes from './routes/MainRoutes';
import { BrowserRouter as Router } from "react-router-dom"
import React, { Component } from 'react';
import { AppContext } from './context/AppContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      checkinList: [],
      setCheckinList: this.setCheckinList,
    }
  }

  setCheckinList = (checkinList) => {
    this.setState({ checkinList });
  };

  render() {
    return <div className="app-container">
      <div className="app-header">
        <div className="app-logo-container">
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        <div className="app-header-title">Clock Check Application</div>
      </div>
      <div className="app-content">
        <AppContext.Provider value={this.state}>
          <Router>
            <MainRoutes />
          </Router>
        </AppContext.Provider>
      </div>
    </div>
  }
}
export default App;