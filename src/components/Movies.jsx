import { Component } from "react";
import { Col, Card, Spinner } from "react-bootstrap";

const KEY = "http://www.omdbapi.com/?apikey=ff3cfefb&";

class Movies extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    fetch(`${KEY}s=${this.props.s}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore Fetch Movies", res);
        }
      })

      .then((data) => {
        if (data.Search) {
          this.setState({
            movies: data.Search,
            loading: false,
          });
        } else {
          throw new Error("Errore Movies Data", data);
        }
      })

      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <>
          {[...Array(6)].map((_, i) => (
            <Col key={i} xs={6} md={4} xl={2} className="movie-col">
              <Card className="bg-transparent movie-card d-flex  justify-content-around align-items-center text-center gap-2 g-2" style={{ height: "45vh" }}>
                <Spinner animation="border" variant="danger" />
              </Card>
            </Col>
          ))}
        </>
      );
    }

    return (
      <>
        {this.state.movies.map((movie, index) => {
          return (
            <Col key={movie.imdbID + index} xs={6} md={4} xl={2}>
              <Card className="bg-transparent">
                <Card.Img src={movie.Poster} alt={movie.Title} />
              </Card>
            </Col>
          );
        })}
      </>
    );
  }
}

export default Movies;
