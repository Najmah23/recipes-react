import { useState } from "react"
import { Card, Col, Button, ListGroupItem, ListGroup } from "react-bootstrap"
import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom"
import MyRecipeDelete from "../components/MyRecipeDelete"
import MyRecipeEdit from "../components/MyRecipeEdit"

function MyRecipeItem(props) {
  const { recipe } = props
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
    <>
      <Col md="3" style={{marginTop:"35px"}} >
        <Card style={{ maxWidth: "350px" }}>
          <Link
            to={`/recipes/${recipe._id}`}
            className="text-black"
            style={{ textDecoration: "none", fontFamily: "cursive" }}
          >
            <Card.Img variant="top" src={recipe.photo} height="200px" style={{ objectFit: "cover" }} />

            <ListGroup className="imagCard">
              <ListGroupItem style={{ textDecoration: "none", color: "red" }}>{recipe.title}</ListGroupItem>
              <ListGroupItem style={{ color: "rgba(42, 25, 141, 0.767)" }}>{recipe.types}</ListGroupItem>
              <ListGroupItem style={{ color: "rgba(94, 7, 79, 0.767)" , maxHeight: 100, overflowY: "scroll"}}>
                Ingredients:
                <ul style={{ listStyle: "circle" }}>
                  {recipe.ingredients
                    .split("*")
                    .slice(1)
                    .map(ingredient => (
                      <li>{ingredient}</li>
                    ))}
                </ul>
              </ListGroupItem>
              {recipe.steps ? (
                <ListGroupItem style={{ color: "rgba(73, 109, 7, 0.932)", maxHeight: 100, overflowY: "scroll" }}>
                  Steps:
                  <ul style={{ listStyle: "auto" }}>
                    {recipe.steps
                      .split("*")
                      .slice(1)
                      .map(step => (
                        <li>{step}</li>
                      ))}
                  </ul>{" "}
                </ListGroupItem>
              ) : null}
              <ListGroupItem style={{ color: "rgba(223, 120, 35, 0.932)" }}>Calories:{recipe.calories}</ListGroupItem>
            </ListGroup>
          </Link>
          <Card.Footer>
            <Button variant="outline-warning" className="me-3" onClick={() => setEditShow(true)}>
            <FiEdit/>
            </Button>
            <Button variant="outline-danger" className="me-3" onClick={() => setDeleteShow(true)}>
            <AiOutlineDelete/>
            </Button>
          </Card.Footer>
        </Card>
        <MyRecipeDelete show={deleteShow} setShow={setDeleteShow} recipeId={recipe._id} />
        <MyRecipeEdit show={editShow} setShow={setEditShow} recipe={recipe} />
      </Col>
    </>
  )
}

export default MyRecipeItem
