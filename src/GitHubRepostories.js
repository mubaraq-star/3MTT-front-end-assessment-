// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PaginationComp from './components/PaginationComp';
// import RepoDetails from './RepoDetails';

// const GitHubRepositories = () => {
//   const [repositories, setRepositories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredRepos, setFilteredRepos] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [reposPerPage] = useState(5);
//   const [selectedRepo, setSelectedRepo] = useState(null);

//   useEffect(() => {
//     const fetchRepositories = async () => {
//       try {
//         const response = await axios.get('https://api.github.com/users/mubaraq-star/repos');
//         setRepositories(response.data);
//         setFilteredRepos(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching repositories:', error);
//         setError('Error fetching repositories. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchRepositories();
//   }, []);

//   useEffect(() => {
//     const filtered = repositories.filter((repo) =>
//       repo.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredRepos(filtered);
//     setCurrentPage(1); 
//   }, [searchTerm, repositories]);

//   const handleRepoClick = (repo) => {
//     console.log('Selected Repository:', repo);
//     setSelectedRepo(repo);
//   };

//   const indexOfLastRepo = currentPage * reposPerPage;
//   const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
//   const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);
//   const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };
  
//   const handleCloseRepoDetails = () => {
//     setSelectedRepo(null);
//   };


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="container">
//       <h1>My GitHub Repositories</h1>
//       <input
//         type="text"
//         placeholder="Search repositories..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
      
//       {selectedRepo ? (
//         <RepoDetails repo={selectedRepo} onClose={handleCloseRepoDetails} />
//       ) : (
//         <>
//           <ul>
//             {currentRepos.map((repo) => (
//               <li key={repo.id} onClick={() => handleRepoClick(repo)}>
//                 <span className="repo-name">{repo.name}</span>: {repo.description}
//               </li>
//             ))}
//           </ul>
//           <PaginationComp currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
//         </>
//       )}
//     </div>
//   );
// };

// export default GitHubRepositories;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaginationComp from './components/PaginationComp';
import RepoDetails from './RepoDetails';

const GitHubRepositories = () => {
  const [username, setUsername] = useState('mubaraq-star'); // Default username
  const [inputUsername, setInputUsername] = useState('mubaraq-star');
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepositories(response.data);
        setFilteredRepos(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(`User "${username}" not found. Please check the username and try again.`);
        } else {
          setError('Error fetching repositories. Please try again later.');
        }
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  useEffect(() => {
    const filtered = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepos(filtered);
    setCurrentPage(1);
  }, [searchTerm, repositories]);

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  const handleInputUsernameChange = (e) => {
    setInputUsername(e.target.value);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    setUsername(inputUsername);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCloseRepoDetails = () => {
    setSelectedRepo(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>GitHub Repositories</h1>
      <form onSubmit={handleUsernameSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={inputUsername}
          onChange={handleInputUsernameChange}
          style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginBottom: '20px' }}>Fetch Repositories</button>
      </form>
      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      {selectedRepo ? (
        <RepoDetails repo={selectedRepo} onClose={handleCloseRepoDetails} />
      ) : (
        <>
          <ul>
            {currentRepos.map((repo) => (
              <li key={repo.id} onClick={() => handleRepoClick(repo)}>
                <span className="repo-name">{repo.name}</span>: {repo.description}
              </li>
            ))}
          </ul>
          <PaginationComp currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </>
      )}
    </div>
  );
};

export default GitHubRepositories;

