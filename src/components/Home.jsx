import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({ user: 'Manu', password: '1234' });
  }
  render() {
    if (
      this.state != null &&
      this.state.user != null &&
      this.state.user != ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido {this.state.user}!</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Introfuce tu correo" />
                <Form.Text className="text-muted">
                  No compartas tu correo con nadie
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Introduce tu contraseña"
                />
                <Form.Text className="text-muted">
                  No compartas tu contraseña con nadie
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Acceder
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default Home;
