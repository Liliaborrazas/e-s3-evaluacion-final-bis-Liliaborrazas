import React, { Component } from 'react';

class RepoList extends Component {
    render() {
        return(<ul className="app__list">
        {this.props.filterData.map(item =>{
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
        </ul>)
    }
}

export default RepoList;