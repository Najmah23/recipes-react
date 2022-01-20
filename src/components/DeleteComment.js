import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import { AiOutlineCloseSquare } from "react-icons/ai"
import RecipesContext from "../utils/RecipesContext"
import {MdOutlineFileDownloadDone} from "react-icons/md"

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
        <Button variant="outline-secondary" onClick={() => setShow(false)}>
        <AiOutlineCloseSquare/>

        </Button>
        <Button variant="outline-danger" onClick={() => deleteComment(recipe._id,comment._id)}>
         <MdOutlineFileDownloadDone/>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteComment
