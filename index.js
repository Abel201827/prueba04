import React from 'react';
import { Navbar, Nav, Form, Button, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { createRoot } from 'react-dom/client';
import { Breadcrumb } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
const feather = require('feather-icons');

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><BsFillPersonFill /> Tu comentario Importa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">NUEVOS MODELOS</Nav.Link>
            <Nav.Link href="#link">MAS OPINIONES</Nav.Link>
            <Nav.Link href="#link">CONTACTOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="2.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-md-6">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;