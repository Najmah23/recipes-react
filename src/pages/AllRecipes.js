import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import RecipesList from "../components/RecipesList"
import RecipesContext from "../utils/RecipesContext"

function AllRecipes() {
  const { recipes } = useContext(RecipesContext)
  return (
    <Container >
      <Row  style={{marginTop:"25px"}}>
        <h4 className="Allrecipe">All recipes</h4>
      </Row>
      <Row>
        <RecipesList recipeTitle="Breakfast" recipeType="Breakfast" />
        <RecipesList recipeTitle="Lunch" recipeType="Lunch" />
        <RecipesList recipeTitle="Snack" recipeType="Snack" />
        <RecipesList recipeTitle="Dinner" recipeType="Dinner" />

      </Row>
    </Container>
  )
}

export default AllRecipes
