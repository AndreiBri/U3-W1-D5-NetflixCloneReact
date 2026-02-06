import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

class TvShowsHeader extends Component {
  render() {
    return (
      <section className={`d-flex align-items-center justify-content-between  ${this.props.className}`}>
        <div className="d-flex align-items-center">
          <h1 className="px-3 text-light fs-1">Tv Shows</h1>
          <Dropdown>
            <Dropdown.Toggle variant="dark" className="border border-light" id="dropdown-genres">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-dark">
              <Dropdown.Item href="#" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex pe-3">
          <i className="bi bi-text-left text-light border border-light img-fluid fs-6 px-2"></i>
          <i className="bi bi-app text-light border border-light img-fluid fs-6 px-2"></i>
        </div>
      </section>
    );
  }
}

export default TvShowsHeader;
