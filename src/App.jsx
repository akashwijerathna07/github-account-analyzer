import './App.css'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <div className="container">
      <div className="app-heading">
        <h1>GitHub Account Analyzer</h1>
        <p>Analyze GitHub profiles, repositories, and coding activity with powerful insights.</p>
      </div>

      <SearchBar />
    </div>
  )
}

export default App
