import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"

function DeleteComment(props) {
  const { deleteComment} = useContext(RecipesContext)
  const { show, setShow,recipe, comment } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this comment ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteComment(recipe._id,comment._id)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteComment
