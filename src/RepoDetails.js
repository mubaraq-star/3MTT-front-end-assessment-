// RepoDetails.js
import React from 'react';
import './RepoDetails.css'

const RepoDetails = ({ repo, onClose }) => {
  return (
    <div className="repo-details">
      <button onClick={onClose}>Close</button>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p><strong>Stars:</strong> {repo.stargazers_count}</p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default RepoDetails;


