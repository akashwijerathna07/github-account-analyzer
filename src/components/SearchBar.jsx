import { useState } from "react";

function SearchBar({ onSearch }){

    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();

        if(userInput.trim() === ""){
            setError("Please enter a username");
            return;
        }

        setError(null);
        onSearch(userInput);
    }

    return(
        <div className="search-wrapper">
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="E.g. @torvalds"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}       
                    />

                    <button 
                        type="submit">
                            Find
                    </button>
                </form>

                
            </div>

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}
        </div>
    )
}

export default SearchBar;