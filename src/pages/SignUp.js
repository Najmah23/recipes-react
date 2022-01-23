import { useContext } from "react"
import { Form, Col, Row, Button, Modal } from "react-bootstrap"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { GoSignIn } from "react-icons/go"
import RecipesContext from "../utils/RecipesContext"

function SignUp() {
  const { signup, signupshow, handleCloseSignup, handleOpenLogin } = useContext(RecipesContext)
  return (
    <div>
      <Modal
        show={signupshow}
        onHide={handleCloseSignup}
        style={{ borderRadius: "10%" }}
        className="ms-4 mt-4 signupstyl"
      >
        <Form
          onSubmit={e => {
            signup(e)
            handleCloseSignup()
            handleOpenLogin()
          }}
        >
          <Modal.Header closeButton className="signup">
            <Modal.Title> Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body className="SignUp">
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>First Name</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="text" name="firstName" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>Last Name</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="text" name="lastName" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>Email</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="email" name="email" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>Password</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="password" name="password" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label> Avatar </Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="file" name="avatar" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-warning" type="submit">
              <GoSignIn />
            </Button>
            <Button variant="outline-secondary" onClick={handleCloseSignup}>
              <AiOutlineCloseSquare />
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}
export default SignUp
