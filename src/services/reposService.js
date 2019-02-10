const ENDPOINT = 'https://api.github.com/orgs/Adalab/repos';

const fetchRepos = () => fetch(ENDPOINT).then(response => response.json());

export { fetchRepos }