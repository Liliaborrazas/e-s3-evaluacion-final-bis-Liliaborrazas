import React, { Component } from 'react';


class Repo extends Component {
    render() {
        return(
        
     <div className="repos">
        <div className="repos__name"><h2 className="repo__name"><a href={this.props.item.html_url}>{this.props.item.name}</a></h2></div>
        <div className="repos__info">{this.props.item.description}</div>
        <div className="repos__language">{this.props.item.language}</div>
      </div>)
    }
}

export default Repo;