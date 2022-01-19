import Navbar from "./components/Navbar"
import "./App.css"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
import axios from "axios"
import RecipesContext from "./utils/RecipesContext"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import OneRecipe from "./pages/OneRecipe"
import { toast, ToastContainer } from "react-toastify"
import AllRecipes from "./pages/AllRecipes"
import firebase from "./utils/firebase"

function App() {
  const [recipes, setRecipes] = useState([])
  const [signupshow, setShowSignup] = useState(false)
  const [loginshow, setShowLogin] = useState(false)

  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  // ------signup---
  const handleOpenSingup = () => setShowSignup(true)

  const handleCloseSignup = () => {
    setShowSignup(false)
  }
  // ---------login
  const handleOpenLogin = () => {
    setShowLogin(true)
  }
  const handleCloseLogin = () => {
    setShowLogin(false)
  }
  
  // ------------Recipes--api
  const getRecipes = async () => {
    const response = await axios.get("https://recipes-api-1.herokuapp.com/api/recipes")
    setRecipes(response.data)
  }

  useEffect(() => {
    getRecipes()
    if (localStorage.tokenRecipes) getProfile()
  }, [])
  // -------get profile
  const getProfile = async () => {
    const response = await axios.get("https://recipes-api-1.herokuapp.com/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenRecipes,
      },
    })
    setProfile(response.data)
    getRecipes()
  }
  // --------edit profile------
  const editProfile = async (e) => {
    e.preventDefault()
    try {
      const form = e.target

      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        avatar: form.elements.avatar.value,
        password: form.elements.password.value,
      }

      await axios.put("https://recipes-api-1.herokuapp.com/api/auth/profile", profileBody, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      getProfile()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // -----Signup------

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post("https://recipes-api-1.herokuapp.com/api/auth/signup", userBody)
      console.log("signup success")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  // ---------lohin-------------
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("https://recipes-api-1.herokuapp.com/api/auth/login", userBody)

      const token = response.data
      localStorage.tokenRecipes = token
      console.log("login success")
      getProfile()
      navigate("/")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenRecipes")
    setProfile(null)
  }
  // -------------Add Recipe------
  const addRecipe = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const image = form.elements.photo.files[0]
      let imageUrl
      if (image) {
        const imageRef = firebase.storage().ref("images").child(`${image.lastModified}-${image.name}`)
        await imageRef.put(image)
        imageUrl = await imageRef.getDownloadURL()
      }
      const recipeBody = {
        title: form.elements.title.value,
        photo: imageUrl,
        ingredients: form.elements.ingredients.value,
        calories: form.elements.calories.value,
        types: form.elements.types.value,
        steps: form.elements.steps.value,
      }
      await axios.post(`https://recipes-api-1.herokuapp.com/api/recipes`, recipeBody, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })

      getRecipes()
      getProfile()
      toast.success("add recipe success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // ----------edit recipe-------
  const editRecipe = async (e, recipeId) => {
    e.preventDefault()
    try {
      const form = e.target

      const recipeBody = {
        title: form.elements.title.value,
        photo: form.elements.photo.value,
        ingredients: form.elements.ingredients.value,
        calories: form.elements.calories.value,
        types: form.elements.types.value,
        steps: form.elements.steps.value,
      }

      await axios.put(`https://recipes-api-1.herokuapp.com/api/recipes/${recipeId}`, recipeBody, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      getRecipes()
      getProfile()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // ---------delet recipe
  const deleteRecipe = async recipeId => {
    try {
      await axios.delete(`https://recipes-api-1.herokuapp.com/api/recipes/${recipeId}`, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      toast.success("recipe deleted")
      getRecipes()
      getProfile()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // --------add reting
  const addRating = async (recipeId, rating) => {
    console.log(rating)
    try {
      const ratingBody = {
        rating,
      }
      await axios.post(`https://recipes-api-1.herokuapp.com/api/recipes/${recipeId}/rating`, ratingBody, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      getRecipes()
      toast.success("Your rate is added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // --------add comment------

  const addComment = async (e, recipeId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`https://recipes-api-1.herokuapp.com/api/recipes/${recipeId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      getRecipes()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // ------edit comment-----
  const editComment = async (e, recipeId, commentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.put(`https://recipes-api-1.herokuapp.com/api/recipes/${recipeId}/comments/${commentId}`, commentBody, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      getRecipes()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // --------------delete Comment---------
  const deleteComment = async (recipeId, commentId) => {
    try {
      await axios.delete(`https://recipes-api-1.herokuapp.com/api/recipes/${recipeId}/comments/${commentId}`, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      toast.success("comment deleted")
      getRecipes()
      getProfile()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // ------Add Like---------------
  const likeRecipe = async recipeId => {
    try {
      const response = await axios.get(`https://recipes-api-1.herokuapp.com/api/recipes/${recipeId}/likes`, {
        headers: {
          Authorization: localStorage.tokenRecipes,
        },
      })
      getRecipes()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    recipes,
    signup,
    handleOpenSingup,
    handleCloseSignup,
    signupshow,
    login,
    handleCloseLogin,
    handleOpenLogin,
    loginshow,
    logout,
    profile,
    addRating,
    addRecipe,
    editRecipe,
    deleteRecipe,
    addComment,
    editComment,
    deleteComment,
    likeRecipe,
    editProfile,
    
  }

  return (
    <RecipesContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes/:recipeId" element={<OneRecipe />} />
        <Route path="/recipes" element={<AllRecipes />} />
      </Routes>
      <Login />
      <SignUp />
    </RecipesContext.Provider>
  )
}

export default App
