import React from 'react';

const Profile = ({ username, avatar, repos, followers, following, homeURL }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {username}</p>
      <img src={avatar} alt="User Avatar" />
      <p>Repositories: {repos}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <a href={homeURL}>Visit Profile</a>
    </div>
  );
};

export default Profile;
