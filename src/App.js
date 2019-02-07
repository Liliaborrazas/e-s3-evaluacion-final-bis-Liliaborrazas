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
      <div className="app__container-title">
        <h1 className="app__title">Repos at Adalab in Github</h1>
        <input className="input" type="text" placeholder="Search"/>
      </div>
      <ul className="app__list">
      {this.state.repos.map(item =>{
        return(
        <li className="app__list-item">
          <div className="repos">
            <div className="repos__name"><h2 className="repo__name"><a href={item.html_url}>{item.name}</a></h2></div>
            <div className="repos__info">{item.description}</div>
            <div className="repos__language">{item.language}</div>
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
