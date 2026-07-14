import { useState } from "react";

function SearchBar({ onSearch }){

    const [userInput, setUserInput] = useState("")
    // const [error, setError] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        // setError(null);

        // if(userInput.trim() === ""){
        //     setError("Please enter a username");
        //     clearUser();
        //     return;
        // }

        onSearch(userInput);
    }

    return(
        
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="E.g. torvalds"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}       
                    />

                    <button 
                        type="submit">
                            Find
                    </button>
                </form>

                
            </div>
        
    )
}

export default SearchBar;