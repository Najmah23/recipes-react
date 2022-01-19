import { Col, Row } from "react-bootstrap"

function MyFaovuritRecipe(props) {
  const { recipe } = props

  return (
    <>
      <Col md="3">
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
      </Col>
    </>
  )
}

export default MyFaovuritRecipe
