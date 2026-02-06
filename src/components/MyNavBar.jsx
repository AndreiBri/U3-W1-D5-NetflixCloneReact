import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyNavBar() {
  return (
    <Navbar expand="lg" variant="dark" className="text-light" style={{ backgroundColor: "#000" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/assets/imgs/netflix_logo.png" alt="netflix_logo" style={{ width: "100px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          {/* Main Links */}
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          {/* Right side Icons & Profile */}
          <div className="d-flex align-items-center">
            <i className="bi bi-search mx-3 text-white"></i>
            <Nav.Link href="#" className="fs-7 mx-3 text-white">
              Kids
            </Nav.Link>
            <i className="bi bi-bell-fill mx-3 text-white"></i>

            <NavDropdown title={<img src="/assets/imgs/avatar.png" alt="profile" style={{ width: "30px" }} />} id="profile-dropdown" align="end">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Account</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
