import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import RecipesContext from "../utils/RecipesContext"

function RecipesList(props) {
  const { recipeTitle, recipeType } = props
  const { recipes } = useContext(RecipesContext)

  if (!recipes)
    <div className="Lodingimg">
      <h1 className="Loding">Loading...</h1>
    </div>

  let recipeTypes

  if (recipeType) {
    recipeTypes = recipes.filter(recipe => recipe.types == recipeType)
  } else {
    recipeTypes = recipes
  }

  return (
    <>
    
      <Row>
        <h1 className="recipeTitle">{recipeTitle}</h1>
      </Row>
      <Row md="4">
        {recipeTypes.map(recipe => (
          <div>
            <section class="cardsLI">
              <article class="card card--1">
                <div class="card__img" />
                <a href={`/recipes/${recipe._id}`}>
                  <img class="card__img--hover" variant="top" src={recipe.photo} />
                </a>
                <div class="card__info">
                  <span class="card__category"> {recipe.types}</span>
                  <h6 class="card__title">{recipe.title}</h6>
                  <span class="card__by">
                    <p>Calories: {recipe.calories}</p>
                  </span>
                </div>
              </article>
            </section>
          </div>
        ))}
      </Row>
      
    </>
  )
}

export default RecipesList
