import { useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(username){

    try{
      setLoading(true);
      setError(null);

      const response = await fetch(`https://api.github.com/users/${username}`);
      
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

      <SearchBar onSearch={handleSearch}/>
    </div>
  )
}

export default App
