import { useGlobal } from "../contexts/GlobalContext"

export default function Form({movieName, setMovieName}) {

    const {submit, setSubmit} = useGlobal()

    const handleSubmit = (e) => {
        e.preventDefault()

        submit ? setSubmit(false) : setSubmit(true)
    }
    console.log(submit)

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