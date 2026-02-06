import { Container, Row, Col, Button } from "react-bootstrap";

function MyFooter({ className }) {
  return (
    <footer className={`text-secondary pt-4 ${className}`} style={{ backgroundColor: "#000" }}>
      <Container>
        <div className="mb-3 fs-2 d-flex gap-3">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
        </div>

        <Row className="mb-3 fs-6">
          <Col xs={6} md={3}>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </Col>
          <Col xs={6} md={3}>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col xs={6} md={3}>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col xs={6} md={3}>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </Col>
        </Row>

        <div>
          <Button variant="outline-secondary" size="sm" className="rounded-0 mb-2">
            Service Code
          </Button>
        </div>

        <div className="fs-6">
          <p>&copy; 1997–2026 Netflix</p>
        </div>
      </Container>
    </footer>
  );
}

export default MyFooter;
