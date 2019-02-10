import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Repo extends Component {
  createColor(color){
    if(color ==="HTML" ){
      return "html"
    }else if( color=== "JavaScript"){
      return "javascript"
    }else{
      return "css"
    }

  }
    render() {
      const {urlHtml, name, description, language} = this.props;
      return( 
        <div className="repos">
          <div className="repos__name"><h2 className="repo__name"><a href={urlHtml}>{name}</a></h2></div>
          <div className="repos__info">{description}</div>
          <div className="repos__language"><div className={`${this.createColor(language)}`}></div>{language}</div>
        </div>)
    }
}

Repo.propTypes = { 

  urlHtml: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired
  
 };

 
export default Repo;