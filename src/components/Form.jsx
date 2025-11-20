export default function Form() {

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
                />
                <button type="submit" className="btn btn-outline-danger mx-2">
                    Send
                </button>
            </form>
         </div>
        </>
    )
}