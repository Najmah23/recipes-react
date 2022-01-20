import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { AiOutlineCloseSquare } from "react-icons/ai"
import RecipesContext from "../utils/RecipesContext"
import {MdOutlineFileDownloadDone} from "react-icons/md"

function EditComment(props) {
  const { show, setShow,comment,recipe } = props
  const { editComment } = useContext(RecipesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editComment(e, recipe._id, comment._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              comment
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="comment" defaultValue={comment.comment} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow(false)}>
          <AiOutlineCloseSquare/>
          </Button>
          <Button variant="outline-success" type="submit" onClick={() => setShow(false)}>
           <MdOutlineFileDownloadDone/>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditComment
