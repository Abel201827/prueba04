import React from 'react';
import { Navbar, Nav, Form, Button, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaHome, FaRegComment } from 'react-icons/fa'; 
import './style.css';
import { Navbar, Nav, Container, Row, Col, Carousel, Card, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#"><BsFillPersonFill /> Tu comentario Importa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#"><FaHome /> INICIO</Nav.Link>
              <Nav.Link href="#"><FaRegComment /> NUEVOS MODELOS</Nav.Link>
              <Nav.Link href="#"><FaRegComment /> MAS OPINIONES</Nav.Link>
              <Nav.Link href="#"><FaRegComment /> CONTACTOS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <ExampleCarouselImage src="1.png" alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src="2.png" alt="Second slide" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src="3.jpg" alt="Third slide" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Header>Danos tu opinión para seguir mejorando :)</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="nombre">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" />
                  </Form.Group>
                  <Form.Group controlId="telefono">
                    <Form.Label>Número de Celular:</Form.Label>
                    <Form.Control type="tel" placeholder="Ingrese su número de celular" />
                  </Form.Group>
                  <Form.Group controlId="modelo">
                    <Form.Label>Modelo de Celular:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el modelo de su celular" />
                  </Form.Group>
                  <Form.Group controlId="comentarios">
                    <Form.Label>Comentarios:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ingrese sus comentarios" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Enviar</Button>
                </Form>
              </Card.Body>
            </Card>
            <br />
            <div className="mt-6">
              <p className="text-muted">OMAR ABEL PINEDA HUAYRA</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;