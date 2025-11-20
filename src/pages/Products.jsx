import { useGlobal } from "../contexts/GlobalContext"
import { useEffect } from "react"
import axios from "axios"
import { API_KEY } from "../api/config"
import Flag from "react-world-flags"
import flags from "../../public/flags"

export default function Products() {

    {/* Array of flags */}
    <flags />

    const {movies, setMovies, search, submit} = useGlobal()

    function fetchMovies() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.error('Errore:', err))
    }

    useEffect(fetchMovies, [submit])

    return (
        <>
          <div className="container">
            <div className="mb-5">
                <h1 className="text-uppercase">products</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row.cols-lg-4">
                {
                    movies.map((thisMovie) => thisMovie.original_language !== 'ru' && (                      
                        <div key={thisMovie.id} className="col">
                            <div className="card bg-black text-white border-danger h-100">
                                <img className="card-img-top" src={thisMovie.poster_path} alt="" />
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h5>{thisMovie.title}</h5>
                                        </li>
                                        <li>
                                            <span>{thisMovie.original_title}</span>
                                        </li>
                                        <li>
                                            <Flag code={flags[thisMovie.original_language]} height={20} />
                                        </li>
                                        <li>
                                            <span>{thisMovie.vote_average}</span>
                                        </li>
                                    </ul>
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