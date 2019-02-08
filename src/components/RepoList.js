import React, { Component } from 'react';
import Repo from './Repo';

class RepoList extends Component {
    render() {
        return(
        <ul className="app__list">
        {this.props.filterData.map(item =>{
          return(
          <li className="app__list-item" id={item.id} key={item.id}>
            <Repo item={item}/>
          </li>
                 )
        })}
        </ul>)
    }
}

export default RepoList;