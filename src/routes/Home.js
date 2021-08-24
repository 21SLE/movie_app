import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component {
  //class는 state를 가지고 있다.
  state = {
    isLoading: true,
    movies: [] //미래에 쓰고자 할 state를 미리 선언해 둘 필요는 없다
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies: movies, isLoading: false}); 
    // this.setState({movies}); 이렇게 해도 자바스크립트는 알아먹음
    // moives data 가져오는게 끝나면 isLoading이 false가 됨.
  };

  componentDidMount() {
    // setTimeout(() => {this.setState({isLoading: false});}, 6000);
    this.getMovies();
  };

  render() {
    const {isLoading, movies} = this.state;
    return <section className="container">
      {isLoading 
      ? <div className="loader">
        <span className = "loader__text">
          "Loading..."
        </span>
      </div>  
      : (
        <div className="movies">
          {movies.map(movie => {
            return <Movie 
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          })}
        </div>
      )
        }
    </section>;
  }
  
}

export default Home;
