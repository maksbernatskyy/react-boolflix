export default function Stars(data) {

    return (
        <>
            <div className="d-flex gap-1">
                <span className="text-warning">{Math.ceil(data.vote_average / 2) >= 1 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                <span className="text-warning">{Math.ceil(data.vote_average / 2) >= 2 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                <span className="text-warning">{Math.ceil(data.vote_average / 2) >= 3 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                <span className="text-warning">{Math.ceil(data.vote_average / 2) >= 4 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
                <span className="text-warning">{Math.ceil(data.vote_average / 2) === 5 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}</span>
            </div>
        </>
    )
}