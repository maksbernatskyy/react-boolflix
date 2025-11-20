import { createContext, useContext, useState } from "react";

// Create context
const GlobalContext = createContext()

// Custom provider
function GlobalProvider({ children }) {

    {/* Variables state to share */}
    const [data, setData] = useState([])

    {/* Variables of the form */}
    const [search, setSearch] = useState('')

    {/* State variable need for search products only on the submit */}
    const [submit, setSubmit] = useState(true)

    return (
        <GlobalContext.Provider
          value={{
            data,
            setData,
            search,
            setSearch,
            submit,
            setSubmit
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