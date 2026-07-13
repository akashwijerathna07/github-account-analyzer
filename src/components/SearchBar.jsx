import { useState } from "react";

function SearchBar(){

    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState(null)

    function handleSearch(){
        if(userInput.trim() === ""){
            setError("Please enter a username");
            return;
        }

        setError(null);
        console.log(userInput);
    }

    return(
        <div className="search-wrapper">
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="E.g. @torvalds"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                        
                />

                <button onClick={handleSearch}>Find</button>

                
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