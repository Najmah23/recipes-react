import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import RecipesContext from "../utils/RecipesContext"
import logo from "../img/salad.png"
import logout1 from "../img/logout (2).png"
import login1 from "../img/log-in.png"
import profile1 from "../img/profile2.png"
import signup1 from "../img/signup9.png"

function NavbarItem() {
  const { logout, handleOpenSingup, handleOpenLogin, handleOpenMeal } = useContext(RecipesContext)

  return (
    <>
      <Navbar className="navsty" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <div className="logo1">
            <Link to="/">
              <img src={logo} height={40} className="me-2" />
            </Link>
          </div>
          <Navbar.Brand  style={{color:"red"}} href="/recipes">Healthy Meal</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Nav>
            {localStorage.tokenRecipes ? (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/profile">
                  <div className="logo1">
                    <img src={profile1} height={30} className="mt-2 me-2" />
                  </div>
                </Link>
                <Link className="nav-link" to="/" onClick={logout}>
                  <div className="logo1">
                    <img src={logout1} height={29} className=" mt-2" />
                  </div>
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Link className="nav-link" onClick={handleOpenLogin} to="/">
                  <div className="logo1">
                    <img src={login1} height={29} className="me-2 mt-2" />
                  </div>
                </Link>
                <Link className="nav-link" onClick={handleOpenSingup} to="/">
                  <div className="logo1">
                    <img src={signup1} height={29} className=" mt-2 " />
                  </div>
                </Link>
              </Nav>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
