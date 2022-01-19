import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"

function MyRecipeDelete(props) {
  const { deleteRecipe } = useContext(RecipesContext)
  const { show, setShow, recipeId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this recipe ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteRecipe(recipeId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyRecipeDelete
