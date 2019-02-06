import React, { Component } from 'react';
import './App.css';
import { fetchRepos } from './services/reposService';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };

    this.getRepos();
  }

  getRepos(){
    fetchRepos()
     .then(data => {
       this.setState({
         repos: data
       })
     });
  }
  render() {
    return (
      <div className="app">
      :)
        
      </div>
    );
  }
}

export default App;
