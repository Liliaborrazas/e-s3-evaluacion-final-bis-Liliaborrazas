import React, { Component } from 'react';
import './App.css';
import { fetchRepos } from './services/reposService';
import RepoList from './components/RepoList';
import Search from './components/Search';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      select: "",
      filter: ""

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
          <Search getRepo={this.getRepo} getSelect={this.getSelect}/>
        </header>
        <main>
          <RepoList filterData={this.filterData()}/>
        </main>   
      </div>
    );
  }
}

export default App;
