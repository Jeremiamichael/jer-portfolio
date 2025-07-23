import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} className="text-center">
            <p>Copyright 2025. Jeremia Johanes Mikhael Paulus</p>
          </Col>
        </Row>          
      </Container>
    </footer>
  )
}     

