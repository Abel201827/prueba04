import React from 'react';
import { Container, Navbar, Nav, Carousel, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tecno Alexander</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Comparación</Nav.Link>
            <Nav.Link href="#link">Ayuda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Imagen+1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Imagen+2"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Imagen+3"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="text-center mt-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nisi id efficitur consectetur. Nulla facilisi. Aliquam erat volutpat.</p>
      </div>

      <div className="form-container">
        <h2>Formulario</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
            <Form.Text className="text-muted">
              No compartiremos su correo con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;