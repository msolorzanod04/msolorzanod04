import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
  }

  cerrarSesion() {
    localStorage.clear();
    location.href = "#";
  }

  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col lg={3}>    
           <InputGroup style={{left: '438px', margin: '20px', fontSize: '30px', fontWeight: 'bold' }}>{localStorage.getItem('user').toUpperCase()}</InputGroup>
            <Card  style={{ width: '20rem', left: '300px', margin: '30px', border: 'black 10px solid' }}>
              <Card.Img  variant="top" src={localStorage.getItem('imagen')} />
            </Card>
          </Col>
          <Col lg={10} >
            <InputGroup style={{margin: '5px',width: '50rem', left:'40px'}}>
              <InputGroup.Text>Nickname</InputGroup.Text>
              <FormControl readonly="readonly"
                id="url"
                placeholder={localStorage.getItem('user')}
              />
            </InputGroup>

            <InputGroup style={{margin: '5px', width: '50rem', left:'40px'}}>
              <InputGroup.Text>Nombre</InputGroup.Text>
              <FormControl readonly="readonly"
                id="url"
                placeholder={localStorage.getItem('nombre')}
              />
            </InputGroup>

            <InputGroup style={{margin: '5px', width: '50rem', left:'40px'}}>
              <InputGroup.Text>E-mail</InputGroup.Text>
              <FormControl readonly="readonly"
                id="url"
                placeholder={localStorage.getItem('email')}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{offset: 4}}>
            <Button variant="primary" onClick={this.cerrarSesion} style={{margin: '15px'}}>
              Cerrar sesión
            </Button>          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Perfil;
