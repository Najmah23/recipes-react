import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import RecipesContext from "../utils/RecipesContext"
import logo from "../img/spaghetti.png"
import logout1 from "../img/logout (4).png"
import login1 from "../img/login (4).png"
import profile1 from "../img/user (4).png"
import signup1 from "../img/contract (1).png"

function NavbarItem() {
  const { logout, handleOpenSingup, handleOpenLogin, handleOpenMeal } = useContext(RecipesContext)

  return (
    <>
      <Navbar className="navsty" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div className="logo1">
            <Link to="/">
              <img src={logo} height={33} className="me-1" />
            </Link>
          </div>
          <Navbar.Brand style={{ color: "#AD7D52",fontFamily:"initial" }} href="/recipes">
            Healthy Meal
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Nav>
            {localStorage.tokenRecipes ? (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/profile">
                  <div className="logo1">
                    <img src={profile1} height={29} className="mt-2 " />
                  </div>
                </Link>
                <Link className="nav-link" to="/" onClick={logout}>
                  <div className="logo1">
                    <img src={logout1} height={30} className=" mt-2 m" />
                  </div>
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Link className="nav-link" onClick={handleOpenLogin} to="/">
                  <div className="logo1">
                    <img src={login1} height={30} className=" mt-2" />
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
