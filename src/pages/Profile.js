import { useContext, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import MyFaovuritRecipe from "../components/MyFaovuritRecipe"
import MyRecipeItem from "../components/MyRecipeItem"
import RecipesContext from "../utils/RecipesContext"
import AddRecipe from "./AddRecipe"
import { FcLike } from "react-icons/fc"
import EditProfile from "../components/EditProfile"
import { FiEdit } from "react-icons/fi"

function Profile() {
  const { profile } = useContext(RecipesContext)
  const [editShow, setEditShow] = useState(false)

  const [show, setShow] = useState(false)

  if (!profile) return <h1>Loading...</h1>
  return (
    <>
      <div className="body.profile">
        <aside class="profile-card">
          <header>
            <img variant="top" src={profile.avatar} />
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>
            <h2>- {profile.email} -</h2>
          </header>

          <div className="profileButtn">
            <Button variant="outline-secondary"  className="ms-5 mb-2" onClick={() => setEditShow(true)}>
            Edit Profile-
              <FiEdit />
            </Button>
            <Button variant="outline-success" onClick={() => setShow(true)} className="ms-4 mb-2">Add Recipe</Button>
          </div>
        </aside>
        <EditProfile show={editShow} setShow={setEditShow} profile={profile} />

        
            
           
      </div>

      {/* =-------------------------------- */}
      <Container>
        <Row className="mt-5">
          <h3>
            Favourite Recipe.
            <FcLike />
          </h3>
          {profile.likes.map(recipe => (
            <MyFaovuritRecipe recipe={recipe} />
          ))}
        </Row>
        <Row className="mt-5">
          <h3>My Recipe...</h3>
          {profile.myRecipes.map(recipe => (
            <MyRecipeItem key={recipe._id} recipe={recipe} />
          ))}
        </Row>
        <AddRecipe show={show} setShow={setShow} />
      </Container>
    </>
  )
}

export default Profile
