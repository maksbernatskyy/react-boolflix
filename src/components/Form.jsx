export default function Form({movieName, setMovieName}) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
         <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Search"
                    value={movieName} 
                    onChange={e => setMovieName(e.target.value)}
                />
                <button type="submit" className="btn btn-outline-danger mx-2">
                    Send
                </button>
            </form>
         </div>
        </>
    )
}