import { useContext } from "react"
import { Button, Card, Row, ListGroup, ListGroupItem, Col } from "react-bootstrap"
import { useParams } from "react-router"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import RecipesContext from "../utils/RecipesContext"
import RatingStars from "../components/RatingStars"
import AddComment from "../components/AddComment"
import CommentItem from "../components/CommentItem"
import { AiOutlineComment } from "react-icons/ai"

function OneRecipe() {
  const { recipeId } = useParams()

  const { recipes, likeRecipe, profile } = useContext(RecipesContext)

  if (!profile || recipes.length === 0)
    return (
      <div className="Lodingimg">
        <h1 className="Loding">Loading...</h1>
      </div>
    )

  const recipe = recipes.find(recipe => recipe._id === recipeId)

  const liked = recipe.likes.includes(profile._id)
  return (
    <div className="CardoneRecipe">
      <Row>
        <Col md="5" className="onrecipe ">
          <Card
            style={{
              width: "21rem",
              textDecoration: "none",
              fontFamily: "cursive",
              backgroundColor: "rgba(255, 255, 255, 0.404)",
            }}
          >
            <Card>
              <Card.Img variant="top" src={recipe.photo} height="200px" style={{ objectFit: "cover" }} />
              <ListGroup >
                <ListGroupItem style={{ textDecoration: "none", color: "red" }}>{recipe.title}</ListGroupItem>
                <ListGroupItem style={{ color: "rgba(42, 25, 141, 0.767)" }}>{recipe.types}</ListGroupItem>
                <ListGroupItem style={{ color: "rgba(94, 7, 79, 0.767)", maxHeight: 200, overflowY: "scroll" }}>
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
                  <ListGroupItem style={{ color: "rgba(73, 109, 7, 0.932)", maxHeight: 150, overflowY: "scroll" }}>
                    Steps:
                    <ul style={{ listStyle: "auto" }}>
                      {recipe.steps
                        .split("*")
                        .slice(1)
                        .map(step => (
                          <li>{step}</li>
                        ))}
                    </ul>
                  </ListGroupItem>
                ) : null}
                <ListGroupItem style={{ color: "rgba(223, 120, 35, 0.932)" }}>Calories:{recipe.calories}</ListGroupItem>
              </ListGroup>
            </Card>
            <Card.Body style={{ margin: "auto" }}>
              <Button variant="outline-danger" onClick={() => likeRecipe(recipe._id)}>
                {liked ? <FcLike /> : <FcLikePlaceholder />}
              </Button>
              <Button variant="border-light">
                <RatingStars recipeId={recipe._id} />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {localStorage.tokenRecipes ? (
          <Col>
            <h3 className="comment mt-4">Comments <AiOutlineComment/></h3>
            {recipe.comments.map(comment => (
              <CommentItem comment={comment} recipe={recipe} />
            ))}
          </Col>
        ) : null}
      </Row>
      {localStorage.tokenRecipes ? (
        <Row>
          <AddComment recipeId={recipe._id} />
        </Row>
      ) : null}
    </div>
  )
}

export default OneRecipe
