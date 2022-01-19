import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import RecipesContext from "../utils/RecipesContext"

function OneStar(props) {
  const { fill, setFill, starNumber, recipeId, setShow } = props
  const { addRating } = useContext(RecipesContext)
  return fill >= starNumber ? (
    <AiFillStar
      size="25"
      onMouseOver={() => setFill(starNumber)}
      onClick={() => {
        addRating(recipeId, starNumber)
        setShow(false)
      }}
    />
  ) : (
    <AiOutlineStar size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar
