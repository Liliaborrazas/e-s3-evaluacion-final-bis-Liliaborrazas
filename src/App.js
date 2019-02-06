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
      <ul className="app__list">
      {this.state.repos.map(item =>{
        return(
        <li className="app__list-item">
          <div className="repos">
           <div className="repos__name">{item.name}</div>
           <p className="repos__info">{item.description}</p>
           <p className="repos__language">{item.language}</p>
          </div>
        </li>
               )
      })}
      </ul>
        
      </div>
    );
  }
}

export default App;
