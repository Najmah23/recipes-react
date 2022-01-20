import { useContext } from "react"
import { Col, Form, Modal, Row, Button } from "react-bootstrap"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"
import RecipesContext from "../utils/RecipesContext"

function EditProfile(props) {
  const { show, setShow, profile } = props
  const { editProfile } = useContext(RecipesContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProfile(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Row>
              <Form.Label>First Name</Form.Label>
            </Row>
            <Col md="10">
              <Form.Control type="text" name="firstName" defaultValue={profile.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Row>
              <Form.Label>Last Name</Form.Label>
            </Row>
            <Col md="10">
              <Form.Control type="text" name="lastName" defaultValue={profile.lastName} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Row>
              <Form.Label>Password</Form.Label>
            </Row>
            <Col md="10">
              <Form.Control type="password" name="password" defaultValue={profile.password} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Row>
              <Form.Label> Avatar </Form.Label>
            </Row>
            <Col md="10">
              <Form.Control type="url" name="avatar" defaultValue={profile.avatar} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow(false)}>
            <AiOutlineCloseSquare />
          </Button>
          <Button variant="outline-success" type="submit" onClick={() => setShow(false)}>
          <MdOutlineFileDownloadDone/>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditProfile
