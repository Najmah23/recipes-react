import { useContext, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import MyFaovuritRecipe from "../components/MyFaovuritRecipe"
import MyRecipeItem from "../components/MyRecipeItem"
import RecipesContext from "../utils/RecipesContext"
import AddRecipe from "./AddRecipe"
import { FcLike } from "react-icons/fc"
import EditProfile from "../components/EditProfile"
import { FiEdit } from "react-icons/fi"
import { MdAddComment } from "react-icons/md"

function Profile() {
  const { profile } = useContext(RecipesContext)
  const [editShow, setEditShow] = useState(false)

  const [show, setShow] = useState(false)

  if (!profile)
    return (
      <div className="Lodingimg">
        <h1 className="Loding">Loading...</h1>
      </div>
    )
  return (
    <Col className="Allprofile">
      <div className="body.profile">
        <aside class="profile-card">
          <header>
            <img variant="top" src={profile.avatar} />
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>
            <h2>- {profile.email} -</h2>
          </header>
        </aside>
      </div>
      <div className="btnprofilee">
        <Button variant="outline-warning" className="ms-5 mb-2" onClick={() => setEditShow(true)}>
          
          <FiEdit />
        </Button>
        <Button variant="outline-success" onClick={() => setShow(true)} className="ms-4 mb-2">
          
          <MdAddComment />
        </Button>
      </div>
      <EditProfile show={editShow} setShow={setEditShow} profile={profile} />

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
    </Col>
  )
}

export default Profile
