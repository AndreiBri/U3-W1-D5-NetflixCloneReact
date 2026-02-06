import { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Movies from "./Movies";
import React from "react";
import "./MyMain.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class MyMain extends Component {
  state = {};

  rowRefTrending = React.createRef();
  rowRefWatchAgain = React.createRef();
  rowRefNewRelease = React.createRef();

  scrollPrev = (rowRef) => {
    rowRef.current.scrollLeft -= 965;
  };
  scrollNext = (rowRef) => {
    rowRef.current.scrollLeft += 965;
  };

  render() {
    return (
      <>
        <main className={this.props.className}>
          <Container fluid className="px-4 mb-3">
            <h4 className="mt-4">Trending Now</h4>
            <div className="carousel-container">
              <Button variant="link" className="text-white" onClick={() => this.scrollPrev(this.rowRefTrending)}>
                <i className="bi bi-arrow-left-circle fs-3 btnleft"></i>
              </Button>
              <Row className="flex-nowrap overflow-x-hidden carousel-row" ref={this.rowRefTrending}>
                <Movies s="One Piece" />
              </Row>
              <Button variant="link" className="text-white" onClick={() => this.scrollNext(this.rowRefTrending)}>
                <i className="bi bi-arrow-right-circle fs-3 btnright"></i>
              </Button>
            </div>
            <h4 className="mt-4">Watch it Again</h4>
            <div className="carousel-container">
              <Button variant="link" className="text-white" onClick={() => this.scrollPrev(this.rowRefWatchAgain)}>
                <i className="bi bi-arrow-left-circle fs-3 btnleft"></i>
              </Button>
              <Row className="flex-nowrap overflow-x-hidden carousel-row" ref={this.rowRefWatchAgain}>
                <Movies s="Spider-Man" />
              </Row>
              <Button variant="link" className="text-white" onClick={() => this.scrollNext(this.rowRefWatchAgain)}>
                <i className="bi bi-arrow-right-circle fs-3 btnright"></i>
              </Button>
            </div>
            <h4 className="mt-4">New Release</h4>
            <div className="carousel-container">
              <Button variant="link" className="text-white" onClick={() => this.scrollPrev(this.rowRefNewRelease)}>
                <i className="bi bi-arrow-left-circle fs-3 btnleft"></i>
              </Button>
              <Row className="flex-nowrap overflow-x-hidden carousel-row " ref={this.rowRefNewRelease}>
                <Movies s="Bleach" />
              </Row>
              <Button variant="link" className="text-white" onClick={() => this.scrollNext(this.rowRefNewRelease)}>
                <i className="bi bi-arrow-right-circle fs-3 btnright"></i>
              </Button>
            </div>
          </Container>
        </main>
      </>
    );
  }
}

export default MyMain;
