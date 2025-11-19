import { createContext, useContext, useState } from "react";

// Create context
const GlobalContext = createContext()

// Custom provider
function GlobalProvider({ children }) {

    {/* Variables state to share */}
    const [movies, setMovies] = useState([])

    return (
        <GlobalContext.Provider
          value={{
            movies,
            setMovies,
          }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

{/* Hook to consume the context */}
function useGlobal() {
    return useContext(GlobalContext)
}

export{GlobalProvider, useGlobal}