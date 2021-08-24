import React from "react";
import PropTypes from "prop-types"
import "./Movie.css"

//movies component는 state를 필요로 하지 않음
//따라서 클래스 컴포넌트로 할 필요 없이 function 컴포넌트로 만들어도 됨.

// function component의 인자로 props 말고 props의 특정 값만 가져올 때는 {} 사용
// function Movies( id, year, title, summary, poster) { ... } // X
// function Movies( {id, year, title, summary, poster}) {...} // O
function Movie({id, year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className ="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
                {genres && genres.map((genre, index) => 
                    <li key={index} className="genres__genre">{genre}</li>
                )}
            </ul>
            <p className="movie__summary">{summary.slice(0, 140)}...</p>
           
        </div>
    </div>;
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;