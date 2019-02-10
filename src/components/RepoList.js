import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Repo from './Repo';
import PropTypes from 'prop-types';


class RepoList extends Component {
    render() {
        return(
        <ul className="app__list">
        {this.props.filterData.map(item =>{
          return(
          <li className="app__list-item" id={item.id} key={item.id}>
            <Repo urlHtml={item.html_url} name={item.name} description={item.description}
             language={item.language}/>
             <Link to={`/repo/${item.id}`}><button type="button" className="btn">Ver más</button></Link>
          </li>
                 )
        })}
        </ul>)
    }
}
 RepoList.propTypes = { 

  filterData: PropTypes.arrayOf(PropTypes.object)
  
 };


export default RepoList;