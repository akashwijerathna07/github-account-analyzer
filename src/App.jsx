import { useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emptyFieldError, setEmptyFieldError] = useState(null);

  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  async function handleSearch(username){

    setEmptyFieldError(null);

    if(username.trim() === ""){
      setEmptyFieldError("Please enter a username");
      setUser(null);
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
          });
      
      if(!response.ok){
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);

    }
    catch(e) {
      setError(e.message);
      setUser(null);
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
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserProfile user={user}/>}

    </div>
  )
}

export default App
