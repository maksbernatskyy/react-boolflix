import { useGlobal } from "../contexts/GlobalContext"
import { useEffect } from "react"
import axios from "axios"
import { API_KEY } from "../api/config"

export default function Products() {

    const {movies, setMovies} = useGlobal()
    const {search} = useGlobal()

    function fetchMovies() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.error('Errore:', err))
    }

    useEffect(fetchMovies, [search])

    return (
        <>
          <div className="container">
            <div className="mb-5">
                <h1 className="text-uppercase">products</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row.cols-lg-4">
                {
                    movies.map((thisMovie) => (
                        <div key={thisMovie.id} className="col">
                            <div className="card bg-black text-white border-danger h-100">
                                <img className="card-img-top" src={thisMovie.poster_path} alt="" />
                                <div className="card-body">
                                    <h5>{thisMovie.original_title}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
          </div>
        </>
    )
}