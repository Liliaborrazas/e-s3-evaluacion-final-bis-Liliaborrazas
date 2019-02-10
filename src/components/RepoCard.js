import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//import PropTypes from 'prop-types';



class RepoCard extends Component {
    render() {
      const {repos} = this.props;
      const repoId = this.props.match.params.id;
      const repo = repos[repoId];
      const {html_url, name, description, language, stargazers_count, watchers, forks } = repo;
    

      return( 
        <div className="repos repos__card">
          <div className="repos__card-name"><h2 className="repo__card-name"><a href={html_url}>{name}</a></h2></div>
          <div className="repos__card-info">{description}</div>
          <div className="repos__card-language">{language}</div>
          <div className="repos__card-stargazers">Stars:{stargazers_count}</div>
          <div className="repos__card-watchers">Watchers:{watchers}</div>
          <div className="repos__card-forks">forks:{forks}</div>
          <Link to="/"><button type="button">volver</button></Link>
        </div>)
    }
}

// RepoCard.propTypes = { 

//     filterData: PropTypes.arrayOf(PropTypes.object),
//     repoId: PropTypes.number.isRequired
  
//  };

 
export default RepoCard;