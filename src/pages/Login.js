import { useContext } from "react"
import { Col, Form, Modal, Row, Button } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"

function Login() {
  const { login, handleCloseLogin, loginshow } = useContext(RecipesContext)

  return (
    <div >
      <Modal show={loginshow} onHide={handleCloseLogin} className="ms-4 mt-4">
        <Form 
          onSubmit={e => {
            login(e)
            handleCloseLogin()
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title> Log in </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3 ">
              <Row>
                <Form.Label>Email</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="email" name="email" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Row>
                <Form.Label>Password</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="password" name="password" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-warning" type="submit">
              Log in
            </Button>
            <Button onClick={handleCloseLogin} variant="outline-secondary">
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default Login
