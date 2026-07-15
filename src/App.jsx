import { useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emptyFieldError, setEmptyFieldError] = useState(null);
  const [repos, setRepos] = useState([]);

  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  async function handleSearch(username){

    setEmptyFieldError(null);

    if(username.trim() === ""){
      setEmptyFieldError("Please enter a username");
      setUser(null);
      setRepos([]);
      setError(null);
      return;
    }

    try{
      setLoading(true);
      setError(null);
      setUser(null);

      const response = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers:{
              Authorization: `Bearer ${TOKEN}`
            }
          }
      );
      
      if(!response.ok){
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);

      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        {
          header:{
            Authorization: `Bearer ${TOKEN}`
          }
        }
      );

      if(!repoResponse.ok){
        throw new Error("Unable to fetch repositories");
      }

      const repoData = await repoResponse.json();
      setRepos(repoData);
      console.log(repoData);

    }
    catch(e) {
      setError(e.message);
      setUser(null);
      setRepos([]);
    } 
    finally {
      setLoading(false);
    }
    
  }

  return (
    <div className="container">
      <div className="app-heading">
        <h1>GitHub Account Analyzer</h1>
        <p>Analyze GitHub profiles, repositories, and coding activity with powerful insights.</p>
      </div>

      <div className="search-wrapper">
        <SearchBar 
          onSearch={handleSearch} />

        {emptyFieldError && <p className='empty-field-error-message'>{emptyFieldError}</p>}
      </div>
      
      {loading && <div className='spinner'></div>}
      {error && <p>{error}</p>}
      {user && <UserProfile user={user} repos={repos}/>}

    </div>
  )
}

export default App
