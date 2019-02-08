import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Search extends Component {
    render() {
        return(
            <div className="app__header-container">
             <h1 className="app__title">Repos at Adalab in Github</h1>
                <input className="input-filter" type="text" placeholder="Search" onKeyUp={this.props.getRepo}/>
                <select className="app__filter-languages" onChange = {this.props.getSelect}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                </select>
            </div>
        )
    }
}

Search.propTypes = {
    getRepo : PropTypes.func.isRequired,
    getSelect : PropTypes.func.isRequired
}

export default Search;