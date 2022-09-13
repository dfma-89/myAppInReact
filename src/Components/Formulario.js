import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Formulario() {
  return (
    <Row className="p-5">
    <Form className="formStyle  col-6 ">
      <Form.Group className="mb-3 mt-3">
        <Form.Label className="mb-0">Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" requiered />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" requiered />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me in" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </Row>
  );
}

export default Formulario;