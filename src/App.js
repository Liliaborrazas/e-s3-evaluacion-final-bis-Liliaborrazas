import React, { Component } from 'react';
import './App.css';
import { fetchRepos } from './services/reposService';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      filter: "",
      select: ""

    };

    this.getRepo = this.getRepo.bind(this); 
    this.getSelect = this.getSelect.bind(this);
  }

  componentDidMount(){
    this.getRepos();

  }

  getRepos(){
    fetchRepos()
     .then(data => {
       const dataRepos = data.map((item, index)=>{
         return {...item, id:index};
       });
       this.setState({
         repos: dataRepos
       })
     });
    }

  getSelect(e){
    const change = e.target.value;
    this.setState({select:change})

  }
  // filterSelect(){
  //   const filtrSelect = this.state.select;
  //   return this.filterInput().filter(item =>
  //     item.language.includes(filterSelect))
  // }
  
  getRepo(e){
    const author = e.currentTarget.value;
    this.setState({filter:author});
  };

  filterData(){
    const repos = this.state.repos;
    const filter = this.state.filter;
    const select = this.state.select;

    return repos.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
      
      ).filter(item =>{
        return(item.language.includes(select))
      })
      
      
  }

  render() {
    return (
      <div className="app">
       <header className="app__header">
        <div className="app__header-container">
          <h1 className="app__title">Repos at Adalab in Github</h1>
          <input className="input-filter" type="text" placeholder="Search" onKeyUp={this.getRepo}/>
          <select className="app__filter-languages" onChange = {this.getSelect}>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
          </select>
        </div>
      </header>
      <main>
      <ul className="app__list">
      {this.filterData().map(item =>{
        return(
        <li className="app__list-item" id={item.id} key={item.id}>
          <div className="repos">
            <div className="repos__name"><h2 className="repo__name"><a href={item.html_url}>{item.name}</a></h2></div>
            <div className="repos__info">{item.description}</div>
            <div className="repos__language">{item.language}</div>
          </div>
        </li>
               )
      })}
      </ul>
      </main>   
      </div>
    );
  }
}

export default App;
