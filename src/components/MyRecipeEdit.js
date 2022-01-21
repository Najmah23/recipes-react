import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"
import RecipesContext from "../utils/RecipesContext"

function MyRecipeEdit(props) {
  const { show, setShow, recipe } = props
  const { editRecipe } = useContext(RecipesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editRecipe(e, recipe._id)}>
        <Modal.Title closeButton className="editrecipem ">
          Edit Recipe
        </Modal.Title>

        <Modal.Body className="EditRecipeM">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={recipe.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={recipe.photo} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Ingredients
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="ingredients" defaultValue={recipe.ingredients} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Steps
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="steps" defaultValue={recipe.steps} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Types
            </Form.Label>
            <Col md="8">
              <Form.Select name="types" defaultValue={recipe.types}>
                <option>Open this select type </option>
                <option value="Breakfast">breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Dinner">Dinner</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Calories
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="calories" defaultValue={recipe.calories} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow(false)}>
            <AiOutlineCloseSquare />
          </Button>
          <Button variant="outline-success" type="submit" onClick={() => setShow(false)}>
            <MdOutlineFileDownloadDone />
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default MyRecipeEdit
