// import React, { Component } from 'react';
// import PropTypes from 'prop-types';



// class RepoCard extends Component {
//     render() {
//       const {filterData , repoId} = this.props;
//       const selectedRepo = filterData[repoId];
//       const urlHtml = `${selectedRepo.html_url}`;
//       const name = selectedRepo.name;
//       const description = selectedRepo.description;
//       const language = selectedRepo.language;

//       return( 
//         <div className="repos repos__card">
//           <div className="repos__card-name"><h2 className="repo__card-name"><a href={urlHtml}>{name}</a></h2></div>
//           <div className="repos__card-info">{description}</div>
//           <div className="repos__card-language">{language}</div>
//         </div>)
//     }
// }

// RepoCard.propTypes = { 

//     filterData: PropTypes.arrayOf(PropTypes.object),
//     repoId: PropTypes.number.isRequired
  
//  };

 
// export default RepoCard;