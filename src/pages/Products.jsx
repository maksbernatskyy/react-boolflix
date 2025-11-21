import { useGlobal } from "../contexts/GlobalContext"
import { useEffect } from "react"
import axios from "axios"
import { API_KEY } from "../api/config"
import Flag from "react-world-flags"
import flags from "../../public/flags"
import { BASE_URL_IMG } from "../api/config"


export default function Products() {

    {/* Array of flags */}
    <flags />

    const {data, setData, search, submit} = useGlobal()

    function fetchMovies() {
        Promise.all([
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`),
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}`)
        ])
          .then(([moviesRes, seriesRes]) => {
            setData([...moviesRes.data.results, ...seriesRes.data.results])
          })
        .catch((err) => console.error('Errore:', err))
    }

    useEffect(fetchMovies, [submit])

    return (
        <>
          <div className="container">
            <div className="mb-5">
                <h1 className="text-uppercase">products</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
                {
                    data.map((thisData) => thisData.original_language !== 'ru' && (                      
                        <div key={thisData.id} className="col">
                            <div className="card bg-black text-white border-danger h-100">
                                {
                                    thisData.backdrop_path && <img id="image" src={thisData.poster_path ? `${BASE_URL_IMG}${thisData.poster_path}` : `${BASE_URL_IMG}${thisData.backdrop_path}`} alt="" />
                                }
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        {/* Title */}
                                        <li className="mb-2">
                                            <span><strong>Title:</strong> {thisData.title ? thisData.title : thisData.name}</span>
                                        </li>
                                        {/* Original title */}
                                        <li className="mb-2">
                                            <span><strong>Original title:</strong> {thisData.original_title ? thisData.original_title : thisData.original_name}</span>
                                        </li>
                                        {/* Date */}
                                        <li className="mb-2">
                                            <span><strong>Date:</strong> {thisData.release_date ? thisData.release_date : thisData.first_air_date}</span>
                                        </li>
                                        {/* Original language */}
                                        <li className="mb-2">
                                            <Flag code={flags[thisData.original_language]} height={20} />
                                        </li>
                                        {/* Average */}
                                        <li>
                                            <div className="d-flex gap-1">
                                                <span className="text-warning">{Math.ceil(thisData.vote_average / 2) >= 1 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                                                <span className="text-warning">{Math.ceil(thisData.vote_average / 2) >= 2 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                                                <span className="text-warning">{Math.ceil(thisData.vote_average / 2) >= 3 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                                                <span className="text-warning">{Math.ceil(thisData.vote_average / 2) >= 4 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                                                <span className="text-warning">{Math.ceil(thisData.vote_average / 2) === 5 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                                            </div>
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